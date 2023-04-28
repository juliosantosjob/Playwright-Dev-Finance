module.exports = {

  getRandomDescrib() {
    const describ = [
      'Carro', 'Casa', 'Luz',
      'Roupa', 'Crédito para celular', 'Presente para esposa',
      'Ifood', 'Internet', 'Gás'];
    const random = Math.floor(Math.random() * describ.length);
    return describ[random];
  },

  getRandomAmount() {
    const amount = [
      '100', '200', '200',
      '120', '220', '135'];
    const random = Math.floor(Math.random() * amount.length);
    return amount[random];
  },

  getRandomDay() {
    let day = Math.floor((Math.random() * 31) + 1).toString();
    day.length === 1 ? day = '0' + day : day;
    return day;
  },

  getRandomMonth() {
    let month = Math.floor((Math.random() * 12) + 1).toString();
    month.length === 1 ? month = '0' + month : month;
    return month;
  }
}