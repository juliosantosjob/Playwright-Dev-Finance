import test from '../support/fixtures';

test.describe('Amounts', () => {
  test('For each transaction, add the value in the "total" field', async ({
    expenseFactory,
    registPage,
    amountPage
  }) => {
    const expense = await expenseFactory();

    await registPage.open();
    await registPage.selectNewTransaction();
    await registPage.registerExpense(expense);
    await registPage.itRegistered(expense);
    await amountPage.seeTotalAmount(expense);
  });

  test('For each transaction, add the value in the "Entradas" field', async ({
    expenseFactory,
    registPage,
    amountPage
  }) => {
    const expense = await expenseFactory();

    await registPage.open();
    await registPage.selectNewTransaction();
    await registPage.registerExpense(expense);
    await amountPage.seeAmountIncome(expense);
  });
});