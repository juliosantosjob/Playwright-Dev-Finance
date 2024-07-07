import { expect } from '@playwright/test';

export class AmountsPage {

  constructor(page) {
    this.page = page;
  }

  async seeTotalAmount(expense) {
    await expect(this.page.locator('#totalDisplay')
      .filter({ hasText: expense.amount }))
      .toBeVisible();
  }

  async seeAmountIncome(expense) {
    await expect(this.page.locator('#incomeDisplay')
      .filter({ hasText: expense.amount }))
      .toBeVisible();
  }
}
