function analyze(array) {
  if (typeof array !== 'object') {
    return { msg: 'Argument must be array' };
  } else if (array === null) {
    return { msg: 'Argument must be array' };
  }
  // HANDLE DATA CLARITY HERE OR ELSEWHERE?
  const avg = average(array);
  // const min = minimum(array);
  const min = minimum2(array);
  // const max = maximum(array);
  const max = maximum2(array);
  const len = array.length;
  return {
    average: avg,
    min: min,
    max: max,
    length: len,
  };
}

function average(array) {
  const sum = array.reduce((a, c) => a + c);
  return sum / array.length;
}

// LOOP BASED VERSIONS
function minimum(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

function maximum(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// ARRAY.SORT BASED  VERSIONS
function minimum2(array) {
  const ascending = array.sort((a, b) => (a < b ? -1 : 1));
  return ascending[0];
}

function maximum2(array) {
  const descending = array.sort((a, b) => (a > b ? -1 : 1));
  return descending[0];
}

module.exports = analyze;
