import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { buyerCreate } from "@/lib/validators/buyer";
// import { isRateLimited } from "@/lib/rateLimit";

export async function POST(req: Request) {
  const data = await req.json();
  
  // Demo mode - return mock created buyer
  const buyer = {
    id: Math.random().toString(36).substr(2, 9),
    ...data,
    status: "NEW",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  return NextResponse.json(buyer, { status: 201 });
}

export async function GET(req: Request) {
  // Demo mode - return mock data
  const mockItems = [
    {
      id: '1',
      fullName: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      city: 'Chandigarh',
      propertyType: 'Apartment',
      budgetMin: 50,
      budgetMax: 80,
      timeline: '0-3m',
      status: 'NEW',
      updatedAt: new Date().toISOString()
    }
  ];
  
  return NextResponse.json({ 
    total: mockItems.length, 
    page: 1, 
    pageSize: 10, 
    items: mockItems 
  });
}
