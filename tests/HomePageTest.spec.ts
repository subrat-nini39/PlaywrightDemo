import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('Home Page and Cart Validation', async ({ page }) => {
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);

  await homePage.open();
  await homePage.validateHomePage();

  await cartPage.goToCart();
  expect(await cartPage.isCartDisplayed()).toBe(true);
});
