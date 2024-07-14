import { test } from '@playwright/test';
import { RegistExpensesPage } from '../pages/registExpenses.page';
import { AmountsPage } from '../pages/amounts.page';
import { getCurrentDate, rand } from './helpers';
import { describeExpense } from '../samples/expenses.json';



export default base.test.extend({
  expenseFactory: async ({ }, use) => {
    const data = {
      description: rand({ array: describeExpense }),
      amount: rand({ min: 20, max: 200 }),
      date: getCurrentDate(),
    };
    await use(() => data);
  },
  
  acceptDialogs: async ({ page }, use) => {
    page.on('dialog', async dialog => await dialog.accept());
    await use(page);
  },

  registPage: async ({ page }, use) => await use(new RegistExpensesPage(page)),
  amountPage: async ({ page }, use) => await use(new AmountsPage(page))
});