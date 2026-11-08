import { describe, it, expect } from "vitest";
import { hashPassword, comparePassword } from "../../../src/utils/password.util.ts";

describe("password.util", () => {
  const password1 = "ClaveUno123!";
  const password2 = "ClaveDos456!";

  it("Hash generation: should produce non-empty strings different from the original", async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    // Validation for hash1
    expect(typeof hash1).toBe("string");
    expect(hash1.length).toBeGreaterThan(0);
    expect(hash1).not.toBe(password1);

    // Validation for hash2
    expect(typeof hash2).toBe("string");
    expect(hash2.length).toBeGreaterThan(0);
    expect(hash2).not.toBe(password2);
  });

  it("Correct password: comparison should return true", async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    // Execute correct comparisons
    const isMatch1 = await comparePassword(password1, hash1);
    const isMatch2 = await comparePassword(password2, hash2);

    expect(isMatch1).toBe(true);
    expect(isMatch2).toBe(true);
  });

  it("Incorrect password: comparison should return false", async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    // Execute cross comparisons (incorrect matching)
    const isMatch1 = await comparePassword(password2, hash1);
    const isMatch2 = await comparePassword(password1, hash2);

    expect(isMatch1).toBe(false);
    expect(isMatch2).toBe(false);
  });
});