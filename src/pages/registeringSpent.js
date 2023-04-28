import { expect } from '@playwright/test';
import { Commands } from '../support/Commands';

export class RegisterSpen {

  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.comm = new Commands(page);
  }

  async goTo() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle('dev.finance$');
  }

  async goNewTransaction() {
    await this.page.locator('[class="button new"]').click();
    await this.comm.contains('div h2', 'Nova Transação');
  }

  async fill(description, amount, date) {
    await this.page.fill('#description', description);
    await this.page.fill('#amount', amount);
    await this.page.fill('#date', date);
    await this.page.locator('.actions button').click();
  }

  async viewRegist(registMsg) {
    await this.comm.contains('tbody', registMsg);
  }

  async removeRegist() {
    await this.page.locator('tr:nth-child(1) img[alt*="R"]').click();
  }

  async thenAddValue(value) {
    await this.comm.contains('#incomeDisplay', value);
  }
}