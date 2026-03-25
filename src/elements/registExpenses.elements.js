export class RegistExpensesElements {

  constructor(page) {
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
}