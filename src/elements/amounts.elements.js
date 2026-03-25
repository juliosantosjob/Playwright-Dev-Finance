export class AmountsElements {
  
  constructor(page) {
    this.totalDisplay = page.locator('#totalDisplay');
    this.incomeDisplay = page.locator('#incomeDisplay');
  }
}