import test from '../fixtures/base.fixtures';

test.describe('Registro de despesas', () => {

  test('Deve registrar despesa com sucesso', async ({
    pages,
    expenseFactory
  }) => {
    const expense = await expenseFactory();

    await pages.expenses.atHome();
    await pages.expenses.selectNewTransaction();
    await pages.expenses.registerExpense(expense);
    await pages.expenses.submit();
    await pages.expenses.itRegistered(expense);
  });

  test('Deve permitir cancelar o registro', async ({
    pages,
    expenseFactory
  }) => {
    const expense = await expenseFactory();
    await pages.expenses.atHome();
    await pages.expenses.selectNewTransaction();
    await pages.expenses.registerExpense(expense);
    await pages.expenses.cancelRegister();
    await pages.expenses.atHome();

  });

  test('Deve remover despesa com sucesso', async ({
    pages,
    expenseFactory
  }) => {
    const expense = await expenseFactory();

    await pages.expenses.atHome();
    await pages.expenses.selectNewTransaction();
    await pages.expenses.registerExpense(expense);
    await pages.expenses.submit();
    await pages.expenses.removeRegister(expense);
    await pages.expenses.verifyExpenseRemoved(expense);
  });
});