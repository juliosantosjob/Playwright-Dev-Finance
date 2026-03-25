import expenses from '../samples/expenses.json';
import { randomValueFrom } from 'rand-select';

function data() {
  return {
    description: randomValueFrom({ array: expenses.describeExpense }),
    amount: randomValueFrom({ min: 10, max: 150 }),
    date: getCurrentDate(),
  };
}

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export { data, getCurrentDate };