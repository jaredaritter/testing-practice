function analyze(array) {
  if (typeof array !== 'object') {
    return { msg: 'Argument must be array' };
  } else if (array === null) {
    return { msg: 'Argument must be array' };
  }
  return array;
}

module.exports = analyze;
