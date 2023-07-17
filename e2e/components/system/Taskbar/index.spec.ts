import { expect, test } from "@playwright/test";
import {
  CLOCK_REGEX,
  OFFSCREEN_CANVAS_NOT_SUPPORTED_BROWSERS,
  TASKBAR_ENTRIES_SELECTOR,
  TEST_APP,
  TEST_APP_ICON,
  TEST_APP_TITLE,
} from "e2e/constants";

test.describe("taskbar", () => {
  test.describe("elements", () => {
    test.beforeEach(async ({ page }) => page.goto("/"));

    test("has start button", async ({ page }) => {
      await expect(page.getByLabel(/^Start$/)).toBeVisible();
    });

    test.describe("has clock", () => {
      test("via canvas", async ({ browserName, page }) => {
        const noCanvasSupport =
          OFFSCREEN_CANVAS_NOT_SUPPORTED_BROWSERS.has(browserName);
        const clock = page.getByLabel(/^Clock$/);

        await expect(clock).toContainText(noCanvasSupport ? CLOCK_REGEX : "");
        await expect(clock.locator("canvas"))[
          noCanvasSupport ? "toBeHidden" : "toBeVisible"
        ]();
      });

      test("via text", async ({ page }) => {
        await page.addInitScript(() => {
          delete (window as Partial<Window & typeof globalThis>)
            .OffscreenCanvas;
        });

        await page.reload();

        await expect(page.getByLabel(/^Clock$/)).toContainText(CLOCK_REGEX);
      });
    });

    test("has calendar", async ({ page }) => {
      await page.getByLabel(/^Clock$/).click();

      await expect(page.getByLabel(/^Calendar$/)).toBeVisible();
    });
  });

  test.describe("entries", () => {
    test.beforeEach(async ({ page }) => page.goto(`/?app=${TEST_APP}`));

    test("has entry", async ({ page }) => {
      const entries = page.locator(TASKBAR_ENTRIES_SELECTOR);

      await expect(entries).toBeVisible();

      const entry = entries.getByLabel(TEST_APP_TITLE);

      await expect(entry).toBeVisible();
      await expect(entry.locator("img")).toHaveAttribute("src", TEST_APP_ICON);
    });
  });
});
