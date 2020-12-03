function caesarCipher(string, shift = 1) {
  const lowercaseStart = 97;
  const lowercaseEnd = 122;
  const uppercaseStart = 65;
  const uppercaseEnd = 90;
  let charCodeArr = [];

  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);
    let shifted = charCode + shift;
    if (charCode >= lowercaseStart && charCode <= lowercaseEnd) {
      shifted = handleShift(shifted, lowercaseStart, lowercaseEnd);
    } else if (charCode >= uppercaseStart && charCode <= uppercaseEnd) {
      shifted = handleShift(shifted, uppercaseStart, uppercaseEnd);
    } else {
      shifted = charCode;
    }
    charCodeArr.push(String.fromCharCode(shifted));
  }
  return charCodeArr.join('');
}

function handleShift(value, start, end) {
  if (value > end) {
    value = start + value - end - 1;
  }
  if (value < start) {
    value = end - (start - value) + 1;
  }
  return value;
}

module.exports = caesarCipher;
