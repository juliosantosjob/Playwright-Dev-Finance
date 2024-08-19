import { RegistExpensesPage } from './src/pages/registExpenses.page';
import { AmountsPage } from './src/pages/amounts.page';

export const pagesInstances = (page) => ({
  registExpenses: new RegistExpensesPage(page),
  amounts: new AmountsPage(page)
});