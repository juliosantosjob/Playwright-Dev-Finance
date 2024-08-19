import expenses from '../samples/expenses';
import { getCurrentDate} from './helpers';

const { randomValueFrom } = require('rand-select');

export const data = {
  description: randomValueFrom({ array: expenses.describeExpense }),
  amount: randomValueFrom({ min: 10, max: 150 }),
  date: getCurrentDate(),
};