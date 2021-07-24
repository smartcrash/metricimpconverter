const { UNITS } = require('../constants')

function ConvertHandler() {
  this.getNum = function (input) {
    let result = `${input}`.replace(/[^0-9\.\/]/g, '')

    const isFractional = result.includes('/')

    if (isFractional) {
      const splitted = result.split('/').map(Number)
      const isDoubleFraction = splitted.length > 2

      if (!isDoubleFraction) {
        const [a, b] = splitted
        result = a / b
      } else {
        return (result = 'invalid number')
      }
    }

    return Number(result || 1)
  }

  this.getUnit = function (input) {
    let result = `${input}`.replace(/[0-9\.\/\-]/g, '')

    if (!UNITS.includes(result)) return 'invalid unit'

    return result
  }

  this.getReturnUnit = function (initUnit) {
    let result

    return result
  }

  this.spellOutUnit = function (unit) {
    let result

    return result
  }

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934
    let result

    return result
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result

    return result
  }
}

module.exports = ConvertHandler
