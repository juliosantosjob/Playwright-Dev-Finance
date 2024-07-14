import { test as base } from '@playwright/test';
import { RegistExpensesPage } from '../pages/registExpenses.page';
import { AmountsPage } from '../pages/amounts.page';
import { getCurrentDate, rand } from './helpers';

const describeExpense = [
  'Carro', 'Casa', 'Luz',
  'Roupa', 'Crédito para Celular', 'Presente para Esposa',
  'Ifood', 'Internet', 'Gás'
];

export default base.test.extend({
  expenseFactory: async ({ }, use) => {
    const data = {
      description: rand(describeExpense),
      amount: rand(20, 200),
      date: getCurrentDate(),
    };
    await use(() => data);
  },
  
  acceptDialogs: async ({ page }, use) => {
    page.on('dialog', dialog => dialog.accept());
    await use(page);
  },

  registPage: async ({ page }, use) => await use(new RegistExpensesPage(page)),
  amountPage: async ({ page }, use) => await use(new AmountsPage(page))
});