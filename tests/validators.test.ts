import { describe, it, expect } from "vitest";
import { buyerCreate } from "../src/lib/validators/buyer";

describe("buyer validator", () => {
  it("rejects when budgetMax < budgetMin", () => {
    const data = {
      fullName: "John Doe",
      phone: "1234567890",
      city: "Chandigarh",
      propertyType: "Plot",
      purpose: "Buy",
      timeline: "0-3m",
      source: "Website",
      budgetMin: 5000,
      budgetMax: 4000,
    };
    expect(() => buyerCreate.parse(data)).toThrow();
  });

  it("accepts valid minimal buyer", () => {
    const data = {
      fullName: "Jane Doe",
      phone: "9876543210",
      city: "Mohali",
      propertyType: "Office",
      purpose: "Rent",
      timeline: "Exploring",
      source: "Referral",
    };
    expect(buyerCreate.parse(data)).toBeTruthy();
  });
});
