import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { buyerCreate } from "@/lib/validators/buyer";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  // Demo mode - return mock data
  const mockBuyer = {
    id,
    fullName: "Demo Buyer",
    phone: "+91 98765 43210",
    city: "Chandigarh",
    propertyType: "Apartment",
    status: "NEW",
    updatedAt: new Date().toISOString()
  };
  return NextResponse.json(mockBuyer);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const data = await req.json();
  
  // Demo mode - return updated data
  const updated = {
    id,
    ...data,
    updatedAt: new Date().toISOString()
  };
  
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  // Demo mode - just return success
  return NextResponse.json({ ok: true, message: "Buyer deleted (demo mode)" });
}
