export function rand(arg1, earg2) {
  if (Array.isArray(arg1)) {
  const randomIndex = Math.floor(Math.random() * arg1.length);
  return arg1[randomIndex];
  } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
  const randomNumber = Math.floor(Math.random() * (arg1 - arg2 + 1) + arg2);
  return randomNumber.toString();
  } else {
  throw new Error("Invalid parameters. Use an array or two numbers.");
  }
}

export function getCurrentDate() {
  const data = new Date();
  const year = data.getFullYear();
  const month = String(data.getMonth() + 1).padStart(2, '0');
  const day = String(data.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
