import { Commands } from '../support/Commands';

export class Amounts {

  constructor(page) {
    this.page = page;
    this.comm = new Commands(page);
  }

  async seeAmountWithMore(value) {
    await this.comm.contains('#totalDisplay', value);
  }
}