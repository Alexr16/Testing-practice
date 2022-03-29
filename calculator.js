module.exports = {
    add: (...num) => {
      let sum = 0;
      num.forEach((num) => sum += num);
      return sum;
    },
    substract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
  }