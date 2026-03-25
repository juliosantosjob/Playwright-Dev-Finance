import { expect } from '@playwright/test';

export class RegistExpensesPage {
  constructor(page) {
    this.page = page;
    this.newTransactionLink = page.getByRole('link', { name: 'Nova Transação' });
    this.titleNewTransaction = page.locator('#form');
    this.buttonCanceled = page.locator('.button.cancel');
    this.descriptionInput = page.locator('#description');
    this.amountInput = page.locator('#amount');
    this.dateInput = page.locator('#date');
    this.saveButton = page.locator('button').filter({ hasText: 'Salvar' });
    this.expenseTr = page.locator('tr');
    this.removeButton = page.locator('img');
  }

  async atHome() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle('dev.finance$');
  }

  async selectNewTransaction() {
    await this.newTransactionLink.click();
    await expect(this.titleNewTransaction).toContainText('Nova Transação');
  }

  async cancelRegister() {
    await this.buttonCanceled.click();
  }

  async registerExpense(expense) {
    await this.descriptionInput.fill(expense.description);
    await this.amountInput.fill(expense.amount);
    await this.dateInput.fill(expense.date);
  }

  async submit() {
    await this.saveButton.click();
  }

  async itRegistered(expense) {
    const expenseDate = expense.date.split('-').reverse().join('/');

    const expenseRequirements = [
      expense.description,
      expense.amount,
      expenseDate
    ];

    for (const value of expenseRequirements) {
      await expect(
        this.page.locator('tr').filter({ hasText: value }).first()
      ).toBeVisible();
    }
  }

  async removeRegister(expense) {
    await this.expenseTr
      .filter({ hasText: expense.description })
      .locator(this.removeButton)
      .click();
  }

  async verifyExpenseRemoved(expense) {
    await expect(
      this.expenseTr.filter({ hasText: expense.description })
    ).toBeHidden();
  }

  async seeMessageAlert(message) {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain(message);
      await dialog.accept();
    });
  }
}