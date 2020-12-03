// DOES NOT ROUND FLOATS
const calculator = {
  add: function (...args) {
    return args.reduce((acc, cur) => acc + cur, 0);
  },
  sub: function (...args) {
    return args.reduce((acc, cur) => acc - cur);
  },
  mul: function (...args) {
    return args.reduce((acc, cur) => acc * cur);
  },
  div: function (...args) {
    return args.reduce((acc, cur) => acc / cur);
  },
};

module.exports = calculator;
