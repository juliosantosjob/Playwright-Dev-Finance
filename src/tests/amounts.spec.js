import { RegistExpensesPage } from '../pages/registExpenses.page';
import { AmountsPage } from '../pages/amounts.page';
import { newExpense } from '../samples/expenses';
import { test } from '@playwright/test';

test.describe('All tests for Amounts', () => {
  let registPage, amountPage;

  /* hook for instances of classes */
  test.beforeEach(async ({ page }) => {
    registPage = new RegistExpensesPage(page);
    amountPage = new AmountsPage(page);
  });
  
  /* hooks for testing */
  test.beforeEach(async ({ page }) => {
    await registPage.openApp();
    await registPage.selectNewTransaction();
    await registPage.registerExpense(newExpense);
    await registPage.itRegistered(newExpense);
  });

  test('For each transaction, add the value in the "total" field', async () => {
    await amountPage.seeTotalAmount(newExpense);
  });

  test('For each transaction, add the value in the "Entradas" field', async () => {
    await amountPage.seeAmountIncome(newExpense);
  });
});