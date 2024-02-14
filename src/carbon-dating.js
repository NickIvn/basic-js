const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string') {
    return false;
  } else {
    const numericActivity = parseFloat(sampleActivity);

    if (!isNaN(numericActivity) && numericActivity > 0 && numericActivity < MODERN_ACTIVITY) {
      const age = Math.ceil((Math.log(MODERN_ACTIVITY / numericActivity) / Math.log(2)) * HALF_LIFE_PERIOD);
      return age;
    } else {
      return false;
    }
  }
}

module.exports = {
  dateSample
};
