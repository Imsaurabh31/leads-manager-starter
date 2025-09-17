import { z } from "zod";

const phoneRegex = /^[0-9]{10,15}$/;

export const buyerBase = z.object({
  fullName: z.string().min(2).max(80),
  email: z.string().email().optional().nullable(),
  phone: z.string().regex(phoneRegex, "Phone must be 10-15 digits"),
  city: z.enum(["Chandigarh","Mohali","Zirakpur","Panchkula","Other"]),
  propertyType: z.enum(["Apartment","Villa","Plot","Office","Retail"]),
  bhk: z.union([z.enum(["1","2","3","4","Studio"]), z.undefined()]).optional(),
  purpose: z.enum(["Buy","Rent"]),
  budgetMin: z.number().int().nonnegative().optional().nullable(),
  budgetMax: z.number().int().nonnegative().optional().nullable(),
  timeline: z.enum(["0-3m","3-6m",">6m","Exploring"]),
  source: z.enum(["Website","Referral","Walk-in","Call","Other"]),
  status: z
    .enum(["New","Qualified","Contacted","Visited","Negotiation","Converted","Dropped"])
    .optional(),
  notes: z.string().max(1000).optional().nullable(),
  tags: z.array(z.string()).optional().nullable(),
});

export const buyerCreate = buyerBase.refine((data) => {
  if (data.budgetMin != null && data.budgetMax != null) {
    return data.budgetMax >= data.budgetMin;
  }
  return true;
}, {
  message: "budgetMax must be >= budgetMin"
}).superRefine((data, ctx) => {
  if (["Apartment","Villa"].includes(data.propertyType) && !data.bhk) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "bhk is required for Apartment and Villa",
      path: ["bhk"],
    });
  }
});

export type BuyerCreate = z.infer<typeof buyerCreate>;
