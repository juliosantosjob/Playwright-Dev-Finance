import { RegisterExpenses } from '../pages/registExpenses.page';
import { Amounts } from '../pages/amounts.page';
import { Helper } from '../support/helper';
import { test } from '@playwright/test';

test.describe('All tests Amounts', () => {
  let HelperPage;
  let RegistPage;
  let AmountPage;

  test.beforeEach(async ({ page }) => {
    RegistPage = new RegisterExpenses(page);
    HelperPage = new Helper(page);
    AmountPage = new Amounts(page);
  });

  test('For each transaction, add the value in the "total" field', async () => {
    await HelperPage.goToApp();
    await RegistPage.accessNewTransaction();
    await RegistPage.registerTheData('Boleto', '100', '2023-04-28');
    await AmountPage.seeAmountWithMore('100');
  });
});