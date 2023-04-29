import { RegisterExpenses } from '../pages/registExpenses';
import { Helper } from '../support/helper';
import { test } from '@playwright/test';

test.describe('All tests Regist', () => {
  let RegistPage;
  let HelperPage;

  test.beforeEach(async ({ page }) => {
    RegistPage = new RegisterExpenses(page);
    HelperPage = new Helper(page);
  });

  test('Registration of a new expense', async () => {
    await HelperPage.goToApp();
    await RegistPage.accessNewTransaction();
    await RegistPage.registerTheData('Conta de Luz', '120', '2023-04-28');
    await RegistPage.seeDescriptionLastRegister('Conta de Luz');
  });

  test('Remove last expense register', async () => {
    await HelperPage.goToApp();
    await RegistPage.accessNewTransaction();
    await HelperPage.randomTransaction();
    await RegistPage.removeLastRegister();
  });
});