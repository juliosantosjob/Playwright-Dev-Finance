import { expect } from '@playwright/test';

export class AmountsPage {
  constructor(page) {
    this.page = page;
  }

  async seeTotalAmount(expectedTotal) {
    const element = this.page.locator('#totalDisplay');
    await expect(element).toContainText(expectedTotal.amount);
  }

  async seeAmountIncome(vlLaunch) {
    const element = this.page.locator('#incomeDisplay');
    await expect(element).toContainText(vlLaunch.amount);
  }
}