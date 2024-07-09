import test from '../support/fixtures';

test.describe('Register', () => {
  test('Registration of a new expense', async ({ registPage, expenseFactory }) => {
    const expense = await expenseFactory();

    await registPage.open();
    await registPage.selectNewTransaction();
    await registPage.registerExpense(expense);
    await registPage.itRegistered(expense);
  });

  test('Remove expense register', async ({ registPage, expenseFactory }) => {
    const expense = await expenseFactory();

    await registPage.open();
    await registPage.selectNewTransaction();
    await registPage.registerExpense(expense);
    await registPage.removeRegister(expense);
    await registPage.verifyExpenseRemoved(expense);
  });
});
