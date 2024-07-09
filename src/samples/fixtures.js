import { test as base } from '@playwright/test';
import { RegistExpensesPage } from '../pages/registExpenses.page';
import { AmountsPage } from '../pages/amounts.page';
import { getCurrentDate, rand } from '../support/helpers';

const describeExpense = [
  'Carro', 'Casa', 'Luz',
  'Roupa', 'Crédito para Celular', 'Presente para Esposa',
  'Ifood', 'Internet', 'Gás'
];

module.exports = base.test.extend({
  expenseFactory: async ({ }, use) => {
    await use(async () => {
      return {
        description: rand(describeExpense),
        amount: rand(20, 200),
        date: getCurrentDate(),
      };
    });
  },

  registPage: async ({ page }, use) => {
    const registPage = new RegistExpensesPage(page);
    await use(registPage);
  },

  amountPage: async ({ page }, use) => {
    const amountPage = new AmountsPage(page);
    await use(amountPage);
  }
});