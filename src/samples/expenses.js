import { getCurrentDate, rand } from '../support/helpers';

const describeExpense = [
  'Carro', 'Casa', 'Luz', 'Roupa', 'Crédito para Celular',
  'Presente para Esposa', 'Ifood', 'Internet', 'Gás'
];

module.exports = {
  newExpense: {
    description: rand(describeExpense),
    amount: rand(20, 200),
    date: getCurrentDate(),
  }
};