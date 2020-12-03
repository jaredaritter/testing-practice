function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }
  string = string.split('');
  string[0] = string[0].toUpperCase();
  return string.join('');
}

module.exports = capitalize;
