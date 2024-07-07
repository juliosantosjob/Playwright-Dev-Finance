import base from '@playwright/test';
import {
  getCurrentDate,
  rand
} from '../support/helpers';

module.exports = base.test.extend({
  expenseFactory: async ({ }, use) => {
    await use(async () => {
      const describeExpense = [
        'Carro', 'Casa', 'Luz', 'Roupa', 'Crédito para Celular',
        'Presente para Esposa', 'Ifood', 'Internet', 'Gás'
      ];

      return {
        description: rand(describeExpense),
        amount: rand(20, 200),
        date: getCurrentDate(),
      };
    });
  }
});