import data from './radomValue';

export class HelperActions {

  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.radomDescrib = data.getRandomDescrib();
    this.randomAmount = data.getRandomAmount();
    this.randomMonth = data.getRandomMonth();
    this.radonDay = data.getRandomDay();
    this.currentDate = new Date();
  }

  async randomTransaction() {
    await this.page.fill('#description', this.radomDescrib);
    await this.page.fill('#amount', this.randomAmount);
    await this.page.fill('#date', `${this.currentDate.getFullYear()}-${this.randomMonth}-${this.radonDay}`);
    await this.page.locator('.actions button').click();
  }
}