import { expect } from '@playwright/test';

export class AmountsPage {
  constructor(page) {
    this.page = page;

    this.totalDisplay = page.locator('#totalDisplay');
    this.incomeDisplay = page.locator('#incomeDisplay');
  }

  async seeTotalAmount(expense) {
    await expect(
      this.totalDisplay.filter({ hasText: expense.amount })
    ).toBeVisible();
  }

  async seeAmountIncome(expense) {
    await expect(
      this.incomeDisplay.filter({ hasText: expense.amount })
    ).toBeVisible();
  }
}