import data from './radomValue';
import { expect } from '@playwright/test';

export class Helper {

  constructor(page) {
    this.page = page;
    this.radomDescrib = data.getRandomDescrib();
    this.randomAmount = data.getRandomAmount(150, 200);
    this.randomMonth = data.getRandomMonth();
    this.radonDay = data.getRandomDay();
    this.currentDate = new Date();
  }

  async goToApp() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle('dev.finance$');
  }

  async randomTransaction() {
    await this.page.fill('#description', this.radomDescrib);
    await this.page.fill('#amount', this.randomAmount);
    await this.page.fill('#date', `${this.currentDate.getFullYear()}-${this.randomMonth}-${this.radonDay}`);
    await this.page.locator('.actions button').click();
  }
}