import test from '../support/fixtures';

test.describe('Register', () => {
  test('Registration of a new expense', async ({ registPage, expenseFactory }) => {
    const expense = await expenseFactory();

    await registPage.open();
    await registPage.selectNewTransaction();
    await registPage.registerExpense(expense);
    await registPage.submit();
    await registPage.itRegistered(expense);
  });

  test('Remove expense register', async ({ registPage, expenseFactory }) => {
    const expense = await expenseFactory();

    await registPage.open();
    await registPage.selectNewTransaction();
    await registPage.registerExpense(expense);
    await registPage.submit();
    await registPage.removeRegister(expense);
    await registPage.verifyExpenseRemoved(expense);
  });
  
  test('Registration expense empty', async ({ acceptDialogs, registPage }) => {
    const message = 'Por favor, preencha todos os campos corretamente';
    
    await registPage.open();
    await registPage.selectNewTransaction();
    await registPage.submit();
    await registPage.seeMessageAlert(message);
  });
});