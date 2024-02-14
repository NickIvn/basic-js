const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
      let count = 1;
      let newStr = str[i];
      for (let j = i + 1; j < str.length; j++) {
          if (str[i] === str[j]) {
              count++;
          } else {
              break;
          }
      }
      if (count > 1) {
          newStr = count + str[i];
      }
      res += newStr;
      i += count - 1;
  }
  return res;
}
module.exports = {
  encodeLine
};
