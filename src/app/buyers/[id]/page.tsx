import Link from "next/link";

export default function BuyerPage({ params }: { params: { id: string } }) {
  const id = params.id;
  
  // Demo data
  const buyer = {
    id,
    fullName: "Demo Buyer",
    phone: "+91 98765 43210",
    email: "demo@example.com",
    city: "Chandigarh",
    propertyType: "Apartment",
    bhk: "2",
    budgetMin: 50,
    budgetMax: 80,
    timeline: "0-3m",
    status: "NEW"
  };

  return (
    <main style={{ padding: 20 }}>
      <h2>{buyer.fullName}</h2>
      <div><strong>Phone:</strong> {buyer.phone}</div>
      <div><strong>Email:</strong> {buyer.email}</div>
      <div><strong>City:</strong> {buyer.city}</div>
      <div><strong>Property:</strong> {buyer.propertyType} ({buyer.bhk})</div>
      <div><strong>Budget:</strong> ₹{buyer.budgetMin}L - ₹{buyer.budgetMax}L</div>
      <div><strong>Timeline:</strong> {buyer.timeline}</div>
      <div><strong>Status:</strong> {buyer.status}</div>
      <div style={{ marginTop: 12 }}>
        <Link href="/buyers">← Back to Buyers</Link>
      </div>
    </main>
  );
}
