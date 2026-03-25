import { expect } from '@playwright/test';
import { AmountsElements } from '../elements/amounts.elements.js';

export class AmountsPage {

  constructor(page) {
    this.page = page;
    this.elements = new AmountsElements(page);
  }

  async seeTotalAmount(expense) {
    await expect(this.elements.totalDisplay
      .filter({ hasText: expense.amount }))
      .toBeVisible();
  }

  async seeAmountIncome(expense) {
    await expect(this.elements.incomeDisplay
      .filter({ hasText: expense.amount }))
      .toBeVisible();
  }
}
