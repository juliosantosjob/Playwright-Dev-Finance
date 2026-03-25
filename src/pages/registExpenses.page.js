import { expect } from '@playwright/test';
import { RegistExpensesElements } from '../elements/registExpenses.elements.js';

export class RegistExpensesPage {

  constructor(page) {
    this.page = page;
    this.elements = new RegistExpensesElements(page);
  }

  async atHome() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle('dev.finance$');
  }

  async selectNewTransaction() {
    await this.elements.newTransactionLink.click();
    await expect(this.elements.titleNewTransaction).toContainText('Nova Transação');
  }

  async cancelRegister() {
    await this.elements.buttonCanceled.click();
  }

  async registerExpense(expense) {
    await this.elements.descriptionInput.fill(expense.description);
    await this.elements.amountInput.fill(expense.amount);
    await this.elements.dateInput.fill(expense.date);
  }

  async submit() {
    await this.elements.saveButton.click();
  }

  async itRegistered(expense) {
    const expenseDate = expense.date.split('-').reverse().join('/');

    const expenseRequirements = [
      expense.description,
      expense.amount,
      expenseDate
    ];

    for (const expense of expenseRequirements) {
      await expect(this.page.locator('tr', { hasText: expense }))
        .toBeVisible();
    }
  }

  async removeRegister(expense) {
    await this.elements.expenseTr
      .filter({ hasText: expense.description })
      .locator(this.elements.removeButton)
      .click();
  }

  async verifyExpenseRemoved(expense) {
    await expect(this.elements.expenseTr
      .filter({ hasText: expense.description }))
      .toBeHidden();
  }

  async seeMessageAlert(message) {
    await this.page.on('dialog', dialog => {
      expect(dialog.message()).toContain(message);
      dialog.accept();
    });
  }

}