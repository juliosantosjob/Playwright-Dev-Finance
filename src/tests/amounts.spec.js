import test from '../fixtures/base.fixtures';

test.describe('Registro de Valores', () => {
  const messageError = 'Por favor, preencha todos os campos corretamente';

  test('Para cada transação, sadicione o valor no campo "total"', async ({
    pages,
    expenseFactory,
  }) => {
    const expense = await expenseFactory();

    await pages.expenses.atHome();
    await pages.expenses.selectNewTransaction();
    await pages.expenses.registerExpense(expense);
    await pages.expenses.submit();
    await pages.expenses.itRegistered(expense);
    await pages.amounts.seeTotalAmount(expense);
  });

  test('Para cada transação, adicione o valor no campo "Entradas"', async ({
    pages,
    expenseFactory
  }) => {
    const expense = await expenseFactory();

    await pages.expenses.atHome();
    await pages.expenses.selectNewTransaction();
    await pages.expenses.registerExpense(expense);
    await pages.expenses.submit();
    await pages.amounts.seeAmountIncome(expense);
  });

  test('Não deve registrar transação com "valor" vazio', async ({
    pages,
    expenseFactory
  }) => {
    const expense = await expenseFactory();
    expense.amount = '';

    await pages.expenses.atHome();
    await pages.expenses.selectNewTransaction();
    await pages.expenses.registerExpense(expense);
    await pages.expenses.seeMessageAlert(messageError);
    await pages.expenses.submit();
  });

  test('Não deve registrar transação com "descrição" vazia', async ({
    pages,
    expenseFactory
  }) => {
    const expense = await expenseFactory();
    expense.description = '';

    await pages.expenses.atHome();
    await pages.expenses.selectNewTransaction();
    await pages.expenses.registerExpense(expense);
    await pages.expenses.seeMessageAlert(messageError);
    await pages.expenses.submit();
  });

  test('Não deve registrar transação com "data" vazia', async ({
    pages,
    expenseFactory
  }) => {
    const expense = await expenseFactory();
    expense.date = '';

    await pages.expenses.atHome();
    await pages.expenses.selectNewTransaction();
    await pages.expenses.registerExpense(expense);
    await pages.expenses.seeMessageAlert(messageError);
    await pages.expenses.submit();
  });

  test('Não deve registrar transação com todos os campos vazios', async ({ pages }) => {
    await pages.expenses.atHome();
    await pages.expenses.selectNewTransaction();
    await pages.expenses.submit();
    await pages.expenses.seeMessageAlert(messageError);
  });
});