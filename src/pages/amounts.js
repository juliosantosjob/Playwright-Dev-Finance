import { Commands } from '../support/commands';

export class Amounts {

  constructor(page) {
    this.page = page;
    this.comm = new Commands(page);
  }

  async seeAmountWithMore(value) {
    await this.comm.contains('#totalDisplay', value);
  }
}