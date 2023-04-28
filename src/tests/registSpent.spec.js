import { test } from '@playwright/test';
import { RegisterSpen } from '../pages/registeringSpent';
import { HelperActions } from '../support/helperActions';

test.describe('All tests Regist', () => {
  let RegistPage;
  let HelperAct;

  test.beforeEach(async ({ page }) => { 
    RegistPage = new RegisterSpen(page);
    HelperAct = new HelperActions(page);
  });

  test('Registering of spen money', async () => {
    await RegistPage.goTo();
    await RegistPage.goNewTransaction();
    await RegistPage.fill('Conta de Luz', '120', '2023-04-27');
    await RegistPage.viewRegist('Conta de Luz');
  });

  test('Remove Registering of spen money', async () => {
    await RegistPage.goTo();
    await RegistPage.goNewTransaction();
    await HelperAct.randomTransaction();
    await RegistPage.removeRegist();
  });

  test.only('Registering a new expense, it must be added to the "Entry" field', async () => { 
    const balance = '200';

    await RegistPage.goTo();
    await RegistPage.goNewTransaction();
    await RegistPage.fill('Conta de Água', balance, '2023-04-27');
    await RegistPage.thenAddValue(balance);
  });
});