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
    const expenseDate = expense.date.split('-').reverse().join('/');
    
    await expect(lastRegister).toContainText(expense.description);
    await expect(lastRegister).toContainText(expense.amount);
    await expect(lastRegister).toContainText(expenseDate);
  }

  async removeRegister(expense) {
    await this.page.locator('tr')
      .filter({ hasText: expense.description })
      .locator('img')
      .click();
  }

  async verifyExpenseRemoved(expense) {
    await expect(
      this.page.locator('tr', { hasText: expense.description }))
      .toBeHidden();
  }
}
