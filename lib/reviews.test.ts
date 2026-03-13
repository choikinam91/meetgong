import { describe, expect, it } from "vitest";

import { reviews } from "./reviews";

describe("reviews data", () => {
  it("contains 30 hardcoded reviews", () => {
    expect(reviews).toHaveLength(30);
  });

  it("every review has required fields", () => {
    for (const review of reviews) {
      expect(review.id).toBeTruthy();
      expect(review.region).toBeTruthy();
      expect(review.title).toBeTruthy();
      expect(review.content).toBeTruthy();
      expect(review.rating).toBeGreaterThanOrEqual(1);
      expect(review.rating).toBeLessThanOrEqual(5);
    }
  });
});
