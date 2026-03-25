import { test as base } from '@playwright/test';
import { pagesInstances } from '../../pages-instance';
import { data } from '../utils/helpers';

export default base.extend({

  expenseFactory: async ({}, use) => {
    await use(data);
  },

  pages: async ({ page }, use) => {
    await use(pagesInstances(page));
  }
});