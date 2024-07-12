import test from '../support/fixtures';

test.describe('Register', () => {
  test('Registration of a new expense', async ({ registPage, expenseFactory }) => {
    const expense = await expenseFactory();

    await registPage.open();
    await registPage.selectNewTransaction();
    await registPage.registerExpense(expense);
    await registPage.itRegistered(expense);
  });

  test('Registration expense empty', async ({ registPage, expenseFactory }) => {
    var expense = await expenseFactory();

    expense.description = '';
    expense.amount = '';
    expense.date = '';

    await registPage.open();
    await registPage.selectNewTransaction();
    await registPage.registerExpense(expense);
    await registPage.seeMessageAlert('Por favor, preencha todos os campos corretamente');
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