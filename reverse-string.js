function reverseString(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.split('').reverse().join('');
}

module.exports = reverseString;
