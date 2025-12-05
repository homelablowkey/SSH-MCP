import { expect, test } from '@playwright/test';

test.describe('smoke', () => {
  test('application responds', async ({ page, baseURL }) => {
    test.skip(!baseURL, 'BASE_URL is not configured; skipping smoke check.');

    const response = await page.goto('/');
    await expect.soft(response?.status()).toBeLessThan(400);
    await expect(page).toHaveTitle(/.*/);
  });
});
