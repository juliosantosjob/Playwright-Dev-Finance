import { RegistExpensesPage } from '../pages/registExpenses.page';
import { newExpense } from '../samples/expenses';
import { test } from '@playwright/test';

test.describe('All tests for Registration', () => {
  let registPage;

  test.beforeEach(async ({ page }) => {
    registPage = new RegistExpensesPage(page);
  });

  test('Registration of a new expense', async () => {
    await registPage.openApp();
    await registPage.selectNewTransaction();
    await registPage.registerExpense(newExpense);
    await registPage.itRegistered(newExpense);
  });

  test('Remove last expense register', async () => {
    await registPage.openApp();
    await registPage.selectNewTransaction();
    await registPage.registerExpense(newExpense);
    await registPage.itRegistered(newExpense);
    await registPage.removeLastRegister();
  });
});