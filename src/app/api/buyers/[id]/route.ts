import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { buyerCreate } from "@/lib/validators/buyer";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const buyer = await prisma.buyer.findUnique({
    where: { id },
    include: { buyerHistory: { orderBy: { changedAt: "desc" }, take: 5 } }
  });
  if (!buyer) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(buyer);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const json = await req.json();
  const parsed = buyerCreate.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
  }
  const data = parsed.data;

  const db = await prisma.buyer.findUnique({ where: { id } });
  if (!db) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Concurrency check
  if (json.updatedAt && new Date(json.updatedAt).getTime() < db.updatedAt.getTime()) {
    return NextResponse.json({ error: "Record changed, please refresh" }, { status: 409 });
  }

  // Ownership check: demo allows update
  const updated = await prisma.$transaction(async (tx) => {
    const b = await tx.buyer.update({
      where: { id },
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
      }
    });

    await tx.buyerHistory.create({
      data: {
        buyerId: id,
        changedById: "demo-user-id",
        diff: { updated: true, fields: data }
      }
    });

    return b;
  });

  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  // ownership check omitted in demo
  await prisma.buyer.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
