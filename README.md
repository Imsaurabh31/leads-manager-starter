# Leads Manager (Starter scaffold)

This is a starter scaffold for the Leads Manager app (Next.js + TypeScript + Prisma + Zod).
It contains core folders and example code for the main flows asked in the spec:
- Create / List / View / Edit buyers
- Prisma schema with migrations (run `pnpm prisma migrate dev --name init`)
- Zod validators (shared)
- CSV import/export sketches
- One example Vitest unit test for the validator

## Quick start (dev)

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set environment variables:
   ```bash
   cp .env.example .env
   # edit .env and set DATABASE_URL
   ```

3. Generate Prisma Client and migrate:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

4. Run dev server:
   ```bash
   pnpm dev
   ```

## What is included

- `prisma/schema.prisma` — DB schema
- `src/lib/validators/buyer.ts` — Zod schemas
- `src/app` — App Router pages (basic)
- `src/app/api/buyers` — API route sketches (create, list, import/export)
- `tests/validators.test.ts` — one vitest test

This scaffold is a starting point. The APIs and UI are intentionally concise but typed and wired so you can expand them into a full app quickly.
