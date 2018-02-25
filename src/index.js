module.exports = function getZerosCount(number) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    let counter = i;
    while (counter % 5 == 0) {
      counter = counter / 5;
      arr.push('x');
    }
  }
  return arr.length;
}
