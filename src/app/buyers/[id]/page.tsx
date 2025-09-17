import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function BuyerPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const buyer = await prisma.buyer.findUnique({
    where: { id },
    include: { buyerHistory: { orderBy: { changedAt: "desc" }, take: 5 } }
  });
  if (!buyer) return <div style={{ padding: 20 }}>Not found</div>;

  return (
    <main style={{ padding: 20 }}>
      <h2>{buyer.fullName}</h2>
      <div><strong>Phone:</strong> {buyer.phone}</div>
      <div><strong>Email:</strong> {buyer.email ?? "-"}</div>
      <div><strong>City:</strong> {buyer.city}</div>
      <div><strong>Property:</strong> {buyer.propertyType} {buyer.bhk ? `(${buyer.bhk})` : ""}</div>
      <div><strong>Budget:</strong> {buyer.budgetMin ?? "-"} — {buyer.budgetMax ?? "-"}</div>
      <div><strong>Timeline:</strong> {buyer.timeline}</div>
      <div><strong>Status:</strong> {buyer.status}</div>
      <div style={{ marginTop: 12 }}>
        <Link href={`/buyers/${buyer.id}/edit`}>Edit</Link>
      </div>

      <section style={{ marginTop: 20 }}>
        <h3>History (last 5)</h3>
        <ul>
          {buyer.buyerHistory.map((h:any) => (
            <li key={h.id}>
              <div>{new Date(h.changedAt).toLocaleString()} by {h.changedById}</div>
              <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(h.diff, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
