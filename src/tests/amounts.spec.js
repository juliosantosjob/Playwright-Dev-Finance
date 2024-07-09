const { RegistExpensesPage } = require('../pages/registExpenses.page');
const { AmountsPage } = require('../pages/amounts.page');
const test = require('../samples/fixtures');

test.describe('Amounts manager', () => {
  let registPage, amountPage;

  test.beforeEach(async ({ page }) => {
    registPage = new RegistExpensesPage(page);
    amountPage = new AmountsPage(page);
  });

  test('For each transaction, add the value in the "total" field', async ({ expenseFactory }) => {
    const expense = await expenseFactory();
    await registPage.open();
    await registPage.selectNewTransaction();
    await registPage.registerExpense(expense);
    await registPage.itRegistered(expense);
    await amountPage.seeTotalAmount(expense);
  });

  test('For each transaction, add the value in the "Entradas" field',
    async ({ expenseFactory }) => {
      const expense = await expenseFactory();
      await registPage.open();
      await registPage.selectNewTransaction();
      await registPage.registerExpense(expense);
      await amountPage.seeAmountIncome(expense);
    });
});