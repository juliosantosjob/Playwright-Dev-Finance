import { expect } from '@playwright/test';

export class Commands {

  constructor(page) {
    this.page = page;
  }

  /**
   * Valid that the selector contains some the text especific.
   * 
   * @param {string} locator Selector html.
   * @param {string} text text to assertion.
   * 
   * ex: contains('#element', 'my text');
   */

  async contains(locator, text) {
    const element = this.page.locator(locator);
    await expect(element).toContainText(text);
  }

  /**
   * Valid that the selector is not be visible on page.
   * 
   * @param {string} locator Selector html.
   * 
   * ex: notVisible('#element');
   */

  async notVisible(locator) {
    const element = this.page.locator(locator);
    await expect(element).not.toBeVisible();
    await expect(element).toHaveCount(0);
  }
}