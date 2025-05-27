import { Page, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }

  async assertTitle(expected: string) {
    await expect(this.page).toHaveTitle(expected);
  }

  async assertURL(expected: string) {
    await expect(this.page).toHaveURL(expected);
  }

  async click(selector: string) {
    await this.page.locator(selector).click();
  }
}
