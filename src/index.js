module.exports = function getZerosCount(number, base) {
  // your implementation
  let result;
  let currentNumber = number;
  let currentBase = base;

  for (let i = 2; i <= base; i++) {
    if (currentBase % i === 0) {
      let numberZeroCount = 0;

      while (currentNumber / i > 0) {
        currentNumber = Math.floor(currentNumber / i);
        numberZeroCount += currentNumber;
      }

      currentNumber = number;
      let baseZeroCount = 0;

      while (currentBase % i === 0) {
        baseZeroCount++;
        currentBase = Math.floor(currentBase / i);
      }

      result = Math.floor(numberZeroCount / baseZeroCount);
    }
  }
  return result;
}
