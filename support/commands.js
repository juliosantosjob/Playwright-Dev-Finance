import { expect } from '@playwright/test';

export class Commands {

  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  async contains(input, text) { 
    const selector = this.page.locator(input);
    await expect(selector).toContainText(text);
  }
}