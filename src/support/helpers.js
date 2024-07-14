function getRandomValue(params = {}) {
  let min, max, array;

  if (params.hasOwnProperty('min') && params.hasOwnProperty('max')) {
    min = params['min'];
    max = params['max'];
  } else if (params.hasOwnProperty('array')) {
    array = params['array'];
  } else {
    throw new Error('To use "getRandomValue" you must enter: "min", "max", or "array".');
  }

  if (array !== undefined) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  } else if (typeof min === 'number' && typeof max === 'number') {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber.toString();
  } else {
    throw new Error('Invalid parameters. Use an array or two numbers.');
  }
}

function getCurrentDate() {
  const data = new Date();
  const year = data.getFullYear();
  const month = String(data.getMonth() + 1).padStart(2, '0');
  const day = String(data.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export { getRandomValue, getCurrentDate };