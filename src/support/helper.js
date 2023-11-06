import { getRandomDescrib, getRandomAmount, getRandomMonth, getRandomDay } from './randomValue';
import { expect } from '@playwright/test';

export class Helper {

  constructor(page) {
    this.page = page;
    this.radomDescrib = getRandomDescrib();
    this.randomAmount = getRandomAmount(150, 200);
    this.randomMonth = getRandomMonth();
    this.radonDay = getRandomDay();
    this.currentDate = new Date();
  }

  async goToApp() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle('dev.finance$');
  }

  async randomTransaction() {
    await this.page.fill('#description', this.radomDescrib);
    await this.page.fill('#amount', this.randomAmount);
    await this.page.fill('#date',
      `${this.currentDate.getFullYear()}-${this.randomMonth}-${this.radonDay}`);
    await this.page.locator('.actions button').click();
  }
}