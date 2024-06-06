import { expect } from '@playwright/test';

export class RegistExpensesPage {
  constructor(page) {
    this.page = page;
  }

  async openApp() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle('dev.finance$');
  }

  async selectNewTransaction() {
    await this.page.locator('[class="button new"]').click();

    const btnNewTransaction = this.page.locator('div h2');
    await expect(btnNewTransaction).toContainText('Nova Transação');
  }

  async registerExpense(expense) {
    await this.page.fill('#description', expense.description);
    await this.page.fill('#amount', expense.amount);
    await this.page.fill('#date', expense.date);
    await this.page.locator('.actions button').click();
  }

  async itRegistered(expense) {
    const lastRegister = this.page.locator('tbody tr:nth-child(1)');
    await expect(lastRegister).toContainText(expense.description);
    await expect(lastRegister).toContainText(expense.amount);

    const newExpense = expense.date.split('-').reverse().join('/');
    await expect(lastRegister).toContainText(newExpense);
  }

  async removeLastRegister() {
    await this.page.locator('tbody tr:nth-child(1) img').click();
    const element = this.page.locator('tbody tr:nth-child(1)');
    await expect(element).toBeHidden();
  }
}