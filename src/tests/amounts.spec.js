import { RegisterExpenses } from '../pages/registExpenses.page';
import { Amounts } from '../pages/amounts.page';
import { Helper } from '../support/helper';
import { test } from '@playwright/test';
import data from '../support/radomValue';
import radom from '../support/radomValue';

test.describe('All tests Amounts', () => {
  const randomAmount = data.getRandomAmount(120, 150);
  const currentDate = radom.getCurrentDate();
  let HelperPg;
  let RegistPg;
  let AmountPg;

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