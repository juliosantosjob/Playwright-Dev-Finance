import { RegistExpensesPage } from '../pages/registExpenses.page';
import { newExpense } from '../samples/expenses';
import { test } from '@playwright/test';

test.describe('All tests for Registration', () => {
  let registPage;
  
  /* hook for instances of classes */
  test.beforeEach(async ({ page }) => {
    registPage = new RegistExpensesPage(page);
  });
  
  /* hooks for testing */
  test.beforeEach(async ({ page }) => {
    await registPage.openApp();
  });

  test('Registration of a new expense', async () => {
    await registPage.selectNewTransaction();
    await registPage.registerExpense(newExpense);
    await registPage.itRegistered(newExpense);
  });

  test('Remove last expense register', async () => {
    await registPage.selectNewTransaction();
    await registPage.registerExpense(newExpense);
    await registPage.itRegistered(newExpense);
    await registPage.removeLastRegister();
  });
});