import { RegistExpensesPage } from '../pages/registExpenses.page';
import test from '../samples/fixtures';

test.describe('Register', () => {
  let registPage;
  
  test.beforeEach(async ({ page }) => {
    registPage = new RegistExpensesPage(page);
  });

  test('Registration of a new expense', async ({ expenseFactory }) => {
    const expense = await expenseFactory();
    await registPage.open();
    await registPage.selectNewTransaction();
    await registPage.registerExpense(expense);
    await registPage.itRegistered(expense);
  });

  test('Remove expense register', async ({ expenseFactory}) => {
    const expense = await expenseFactory();
    await registPage.open();
    await registPage.selectNewTransaction();
    await registPage.registerExpense(expense);
    await registPage.removeRegister(expense);
    await registPage.verifyExpenseRemoved(expense);
  });
});
