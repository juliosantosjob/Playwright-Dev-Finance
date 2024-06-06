export function rand(max, min) {
  if (min === undefined) {
    const r = Math.floor(Math.random() * max.length);
    return max[r];
  }
  return Math.floor(Math.random() * (max - min + 1) + min).toString();
};

export function getCurrentDate() {
  const data = new Date();
  const year = data.getFullYear();
  const month = String(data.getMonth() + 1).padStart(2, '0');
  const day = String(data.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}