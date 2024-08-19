import { test as base } from '@playwright/test';
import { pagesInstances } from '../../pages-instance';
import { data } from '../support/generetors';

export default base.test.extend({

  /**
   * Generate random data
   *
   */

  expenseFactory: async ({ }, use) => {
    await use(() => data);
  },

  /**
   * Accepts all dialogs
   *
   */
  
  acceptDialogs: async ({ page }, use) => {
    page.on('dialog', async dialog => await dialog.accept());
    await use(page);
  },

  /**
   * Instance pages for tests in fixtures
   *
   */

  pages: async ({ page }, use) => {
    await use(pagesInstances(page));
  }
});