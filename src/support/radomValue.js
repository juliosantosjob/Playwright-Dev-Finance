
/* Generator mass radom for help project. */

/**
 * Will return random expense types.
 * @returns Return a string with the name of an expense.
 */

function getRandomDescrib() {
  const expenses = [
    'Carro', 'Casa', 'Luz', 'Roupa', 'Crédito para Celular',
    'Presente para Esposa', 'Ifood', 'Internet', 'Gás'
  ];

  const random = Math.floor(Math.random() * expenses.length);
  return expenses[random];
}

/**
 *  Will return the value a random amount.
 * @param {number} max maximum value.
 * @param {number} min minimum value.
 * @returns Return one string random from amount total. 
 */

function getRandomAmount(max, min) {
  const value = Math.floor(Math.random() * (max - min + 1) + min);
  return value.toString();
}

/**
 * It will return a random day, from the 1st to the 31st.
 * @returns Returns the day as a string value.
 */

function getRandomDay() {
  const day = Math.floor((Math.random() * 31) + 1);
  return day.toString().padStart(2, '0');
}

/**
 * It will return a random month, from month 1 to month 12.
 * @returns Returns the month as a string value.
 */

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