import { test } from '@playwright/test';
import { RegisterExpenses } from '../pages/registExpenses';
import { HelperActions } from '../support/helperActions';

test.describe('All tests Regist', () => {
  let RegistPage;
  let HelperAct;

  test.beforeEach(async ({ page }) => { 
    RegistPage = new RegisterExpenses(page);
    HelperAct = new HelperActions(page);
  });

  test('Registration of a new expense', async () => {
    await HelperAct.goToApp();
    await RegistPage.accessNewTransaction();
    await RegistPage.registerTheData('Conta de Luz', '120', '2023-04-27');
    await RegistPage.seeDescriptionLastRegister('Conta de Luz');
  });

  test('Remove last expense register', async ({ page }) => {
    await HelperAct.goToApp();
    await RegistPage.accessNewTransaction();  
    await HelperAct.randomTransaction();
    await RegistPage.removeLastRegister();
  });
});