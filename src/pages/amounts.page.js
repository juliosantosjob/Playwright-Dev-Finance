import { Commands } from '../support/commands';

export class Amounts {

  constructor(page) {
    this.page = page;
    this.comm = new Commands(page);
  }

  async seeAmountWithMore(vlWithMore) {
    await this.comm.contains('#totalDisplay', vlWithMore);
  }

  async seeAmountIncome(vlLaunch) {
    await this.comm.contains('#incomeDisplay', vlLaunch);
  }
}