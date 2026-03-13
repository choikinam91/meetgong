import { expect, test } from "@playwright/test";

import { mobileViewports } from "./fixtures/viewports";

for (const viewport of mobileViewports) {
  test.describe(`${viewport.name} core mobile ux`, () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
    });

    test("top/bottom mobile nav is visible and touch-friendly", async ({ page }) => {
      await page.goto("/");

      await expect(page.getByTestId("mobile-top-app-bar")).toBeVisible();
      await expect(page.getByTestId("mobile-bottom-nav")).toBeVisible();

      const firstTab = page.getByRole("link", { name: "홈" });
      const tabBox = await firstTab.boundingBox();
      expect(tabBox).toBeTruthy();
      expect(tabBox!.height).toBeGreaterThanOrEqual(44);
    });

    test("hero title no longer uses text-balance class", async ({ page }) => {
      await page.goto("/");

      const className = await page.getByTestId("hero-title").getAttribute("class");
      expect(className ?? "").not.toContain("text-balance");
    });

    test("region change resets slider to first card", async ({ page }) => {
      await page.goto("/reviews");

      await page.getByLabel("다음 리뷰").click();
      await page.getByLabel("다음 리뷰").click();

      const activeLabelBefore = await page.getByTestId("active-region-label").textContent();
      expect(activeLabelBefore).toContain("서울");

      await page.getByTestId("region-tab-경기").click();

      await expect(page.getByTestId("active-region-label")).toContainText("경기");

      const translateX = await page.getByTestId("reviews-track").evaluate((el) => {
        const transform = window.getComputedStyle(el).transform;
        if (!transform || transform === "none") return 0;

        if (transform.startsWith("matrix3d(")) {
          const values = transform
            .slice(9, -1)
            .split(",")
            .map((value) => Number(value.trim()));
          return values[12] ?? 0;
        }

        if (transform.startsWith("matrix(")) {
          const values = transform
            .slice(7, -1)
            .split(",")
            .map((value) => Number(value.trim()));
          return values[4] ?? 0;
        }

        return 0;
      });

      expect(Math.abs(translateX)).toBeLessThanOrEqual(2);
    });
  });
}
