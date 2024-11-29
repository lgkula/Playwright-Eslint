import { test, expect } from '@playwright/test';

test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('Eslint test 1', async ({ page }) => {
  let a = 1;
  const b = 2;
  
  console.log(a);
  
})

