import prisma from "../src/lib/prisma";

async function main() {
  const u = await prisma.user.upsert({
    where: { email: "demo@local" },
    update: {},
    create: {
      email: "demo@local",
      name: "Demo User"
    }
  });
  console.log("Seeded user:", u.id);
}

main().catch(e => { console.error(e); process.exit(1); }).finally(()=>prisma.$disconnect());
