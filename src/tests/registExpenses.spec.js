import test from '../support/fixtures';

test.describe('Register', () => {
  test('Registration of a new expense', async ({ pages, expenseFactory }) => {
    const expense = await expenseFactory();

    await pages.registExpenses.open();
    await pages.registExpenses.selectNewTransaction();
    await pages.registExpenses.registerExpense(expense);
    await pages.registExpenses.submit();
    await pages.registExpenses.itRegistered(expense);
  });

  test('Remove expense register', async ({ pages, expenseFactory }) => {
    const expense = await expenseFactory();

    await pages.registExpenses.open();
    await pages.registExpenses.selectNewTransaction();
    await pages.registExpenses.registerExpense(expense);
    await pages.registExpenses.submit();
    await pages.registExpenses.removeRegister(expense);
    await pages.registExpenses.verifyExpenseRemoved(expense);
  });

  test('Registration expense empty', async ({ pages }) => {
    const message = 'Por favor, preencha todos os campos corretamente';

    await pages.registExpenses.open();
    await pages.registExpenses.selectNewTransaction();
    await pages.registExpenses.submit();
    await pages.registExpenses.seeMessageAlert(message);
  });
});