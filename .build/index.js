"use strict";
function wrappedNum(number) {
  return {
    number,
    logs: []
  };
}
function addTwo(number) {
  return {
    number: number + 2,
    logs: [`${number} + 2`]
  };
}
function mulTwo(number) {
  return {
    number: number * 2,
    logs: [`${number} * 2`]
  };
}
function run(numberWithLogs, transform) {
  const transformed = transform(numberWithLogs.number);
  return {
    number: transformed.number,
    logs: numberWithLogs.logs.concat(transformed.logs)
  };
}
const add = run(wrappedNum(3), addTwo);
const mul = run(wrappedNum(3), mulTwo);
const chained = run(run(wrappedNum(3), addTwo), mulTwo);
const deepChained = run(run(run(wrappedNum(3), addTwo), mulTwo), addTwo);
console.log(add);
console.log(mul);
console.log(chained);
console.log(deepChained);
//# sourceMappingURL=index.js.map
