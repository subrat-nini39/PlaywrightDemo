import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private homeURL = '/';
  private expectedTitle = 'STORE';

  async open() {
    await this.navigateTo(this.homeURL);
  }

  async validateHomePage() {
    await this.assertTitle(this.expectedTitle);
    await this.assertURL('https://www.demoblaze.com/');
  }
}
