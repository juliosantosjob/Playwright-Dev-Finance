import { Commands } from '../support/commands';

export class RegisterExpenses {

  constructor(page) {
    this.page = page;
    this.comm = new Commands(page);
  }

  async newTransact() {
    await this.page.locator('[class="button new"]').click();
    await this.comm.contains('div h2', 'Nova Transação');
  }

  async registData(description, amount, date) {
    await this.page.fill('#description', description);
    await this.page.fill('#amount', amount);
    await this.page.fill('#date', date);
    await this.page.locator('.actions button').click();
  }

  async seeLastRegister(regist) {
    await this.comm.contains('tbody td:nth-child(1)', regist);
  }

  async removeLastRegister() {
    await this.page.locator('tbody :nth-child(1) img').click();
    await this.comm.notVisible('tbody :nth-child(1)');
  }
}