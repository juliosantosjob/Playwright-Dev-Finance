export function rand(params = {}) {
  let min, 
      max, 
      array;
  
    if(params.hasOwnProperty('min')) {
      min = params['min']
    }
    
    if(params.hasOwnProperty('max')) {
      max = params['max']
    }
    
    if(params.hasOwnProperty('array')) {
      array = params['array']
    }
    
  if (array !== undefined) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  } else if (typeof min === 'number' && typeof max === 'number') {
    const randomNumber = Math.floor(Math.random() * (min - max + 1) + max);
    return randomNumber.toString();
  } else {
    throw new Error('Invalid parameters. Use an array or two numbers.');
  }
}

export function getCurrentDate() {
  const data = new Date();
  const year = data.getFullYear();
  const month = String(data.getMonth() + 1).padStart(2, '0');
  const day = String(data.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}