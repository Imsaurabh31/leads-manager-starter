import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { buyerCreate } from "@/lib/validators/buyer";
import { isRateLimited } from "@/lib/rateLimit";

export async function POST(req: Request) {
  // NOTE: this is a sketch. Replace `getUserIdFromSession` with your auth.
  const userId = "demo-user-id";
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (isRateLimited(userId)) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const json = await req.json();
  const parsed = buyerCreate.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
  }
  const data = parsed.data;

  const buyer = await prisma.buyer.create({
    data: {
      fullName: data.fullName,
      email: data.email ?? null,
      phone: data.phone,
      city: data.city,
      propertyType: data.propertyType,
      bhk: data.bhk ?? null,
      purpose: data.purpose,
      budgetMin: data.budgetMin ?? null,
      budgetMax: data.budgetMax ?? null,
      timeline: data.timeline,
      source: data.source,
      notes: data.notes ?? null,
      tags: data.tags ?? [],
      ownerId: userId,
    },
  });

  await prisma.buyerHistory.create({
    data: {
      buyerId: buyer.id,
      changedById: userId,
      diff: { created: true, fields: data },
    }
  });

  return NextResponse.json(buyer, { status: 201 });
}

export async function GET(req: Request) {
  // Basic listing with page, pageSize, filters
  const url = new URL(req.url);
  const page = Number(url.searchParams.get("page") || "1");
  const pageSize = Math.min(Number(url.searchParams.get("pageSize") || "10"), 100);
  const skip = (Math.max(page,1)-1)*pageSize;

  const where: any = {};
  const city = url.searchParams.get("city");
  if (city) where.city = city;
  const propertyType = url.searchParams.get("propertyType");
  if (propertyType) where.propertyType = propertyType;
  const status = url.searchParams.get("status");
  if (status) where.status = status;
  const timeline = url.searchParams.get("timeline");
  if (timeline) where.timeline = timeline;
  const search = url.searchParams.get("search");
  if (search) {
    where.OR = [
      { fullName: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
      { phone: { contains: search } },
    ];
  }

  const [total, items] = await Promise.all([
    prisma.buyer.count({ where }),
    prisma.buyer.findMany({
      where,
      orderBy: { updatedAt: "desc" },
      skip,
      take: pageSize,
      select: {
        id:true, fullName:true, phone:true, city:true, propertyType:true, budgetMin:true, budgetMax:true, timeline:true, status:true, updatedAt:true
      }
    })
  ]);

  return NextResponse.json({ total, page, pageSize, items });
}
