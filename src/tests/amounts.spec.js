import test from '../support/fixtures';

test.describe('Amounts', () => {
  test('For each transaction, add the value in the "total" field', async ({
    pages,
    expenseFactory,
  }) => {
    const expense = await expenseFactory();

    await pages.registExpenses.open();
    await pages.registExpenses.selectNewTransaction();
    await pages.registExpenses.registerExpense(expense);
    await pages.registExpenses.submit();
    await pages.registExpenses.itRegistered(expense);
    await pages.amounts.seeTotalAmount(expense);
  });

  test('For each transaction, add the value in the "Entradas" field', async ({
    pages,
    expenseFactory
  }) => {
    const expense = await expenseFactory();

    await pages.registExpenses.open();
    await pages.registExpenses.selectNewTransaction();
    await pages.registExpenses.registerExpense(expense);
    await pages.registExpenses.submit();
    await pages.amounts.seeAmountIncome(expense);
  });
});