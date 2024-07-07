import { expect } from '@playwright/test';

export class AmountsPage {
  
  constructor(page) {
    this.page = page;
  }

  async seeTotalAmount(expectedTotal) {
    await expect(
      this.page.locator('#totalDisplay'))
      .filter({ hasText: expectedTotal })
      .toBeVisible();
  }

  async seeAmountIncome(vlLaunch) {
    await expect(
      this.page.locator('#incomeDisplay'))
      .filter({ hasText: vlLaunch })
      .toBeVisible();
  }
}