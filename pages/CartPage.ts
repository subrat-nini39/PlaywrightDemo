import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  private cartLink = '#cartur';
  private cartHeader = 'h2:has-text("Products")';

  async goToCart() {
    await this.click(this.cartLink);
  }

  async isCartDisplayed(): Promise<boolean> {
    return await this.page.locator(this.cartHeader).isVisible();
  }
}
