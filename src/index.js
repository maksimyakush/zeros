module.exports = function getZerosCount(number) {
  let result = 0;
  for (let i = 0; i <= number; i++) {
    let counter = i + 1;
    while (counter % 5 == 0) {
      counter = counter / 5;
      result++;
    }
  }
  return result;
}
