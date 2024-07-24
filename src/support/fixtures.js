import { test as base } from '@playwright/test';
import { RegistExpensesPage } from '../pages/registExpenses.page';
import { AmountsPage } from '../pages/amounts.page';
import { getCurrentDate, getRandomValue } from './helpers';
import { describeExpense } from '../samples/expenses.json';

export default base.test.extend({
  expenseFactory: async ({}, use) => {
    const data = {
      description: getRandomValue({ array: describeExpense }),
      amount: getRandomValue({ min: 10, max: 150 }),
      date: getCurrentDate(),
    };   
    await data;
  },
  
  acceptDialogs: async ({ page }, use) => {
    page.on('dialog', async dialog => await dialog.accept());
    await use(page);
  },

  registPage: async ({ page }, use) => await use(new RegistExpensesPage(page)),
  amountPage: async ({ page }, use) => await use(new AmountsPage(page))
});
