import { getRandomAmount, getCurrentDate } from '../support/randomValue';
import { RegisterExpenses } from '../pages/registExpenses.page';
import { Amounts } from '../pages/amounts.page';
import { Helper } from '../support/helper';
import { test } from '@playwright/test';

test.describe('All tests Amounts', () => {
  const randomAmount = getRandomAmount(120, 150);
  const currentDate = getCurrentDate();
  let HelperPg ,RegistPg, AmountPg;

  test.beforeEach(async ({ page }) => {
    RegistPg = new RegisterExpenses(page);
    HelperPg = new Helper(page);
    AmountPg = new Amounts(page);
  });

  test('For each transaction, add the value in the "total" field', async () => {
    await HelperPg.goToApp();
    await RegistPg.newTransact();
    await RegistPg.registData('Boleto', randomAmount, currentDate);
    await AmountPg.seeAmountWithMore(randomAmount);
  });

  test('For each transaction, add the value in the "Entradas" field', async () => {
    await HelperPg.goToApp();
    await RegistPg.newTransact();
    await RegistPg.registData('Boleto', randomAmount, currentDate);
    await AmountPg.seeAmountIncome(randomAmount);
  });
});
