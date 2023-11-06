import { RegisterExpenses } from '../pages/registExpenses.page';
import { Helper } from '../support/helper';
import { test } from '@playwright/test';
import { getCurrentDate } from '../support/randomValue';

test.describe('All tests Regist', () => {
  let RegistPg, HelperPg;
  const currentDate = getCurrentDate();

  test.beforeEach(async ({ page }) => {
    RegistPg = new RegisterExpenses(page);
    HelperPg = new Helper(page);
  });

  test('Registration of a new expense', async () => {
    await HelperPg.goToApp();
    await RegistPg.newTransact();
    await RegistPg.registData('Conta de Luz', '120', currentDate);
    await RegistPg.seeLastRegister('Conta de Luz');
  });

  test('Remove last expense register', async () => {
    await HelperPg.goToApp();
    await RegistPg.newTransact();
    await HelperPg.randomTransaction();
    await RegistPg.removeLastRegister();
  });
});