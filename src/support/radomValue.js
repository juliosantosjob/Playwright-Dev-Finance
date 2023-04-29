function getRandomDescrib() {
  const expenses = [
    'Carro', 'Casa', 'Luz', 'Roupa', 'Crédito para Celular',
    'Presente para Esposa', 'Ifood', 'Internet', 'Gás'
  ];

  const random = Math.floor(Math.random() * expenses.length);
  return expenses[random];
}

function getRandomAmount(max, min) {
  const value = Math.floor(Math.random() * (max - min + 1) + min);
  return value.toString();
}

function getRandomDay() {
  const day = Math.floor((Math.random() * 31) + 1);
  return day.toString().padStart(2, '0');
}

function getRandomMonth() {
  const month = Math.floor(Math.random() * 12) + 1;
  return month.toString().padStart(2, '0');
}

export default {
  getRandomDescrib,
  getRandomAmount,
  getRandomDay,
  getRandomMonth
};