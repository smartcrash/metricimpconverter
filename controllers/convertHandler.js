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

    return UNITS[result.toUpperCase()] || 'invalid unit'
  }

  this.getReturnUnit = function (initUnit) {
    if (initUnit === UNITS.KM) return UNITS.MI
    if (initUnit === UNITS.MI) return UNITS.KM
    if (initUnit === UNITS.LBS) return UNITS.KG
    if (initUnit === UNITS.KG) return UNITS.LBS
    if (initUnit === UNITS.GAL) return UNITS.L
    if (initUnit === UNITS.L) return UNITS.GAL
  }

  this.spellOutUnit = function (unit) {
    return {
      [UNITS.MI]: 'miles',
      [UNITS.KM]: 'kilometers',
      [UNITS.KG]: 'kilograms',
      [UNITS.LBS]: 'pounds',
      [UNITS.L]: 'liters',
      [UNITS.GAL]: 'gallons',
    }[unit]
  }

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934

    let result

    if (initUnit === UNITS.GAL) result = initNum * galToL
    if (initUnit === UNITS.L) result = initNum / galToL

    if (initUnit === UNITS.LBS) result = initNum * lbsToKg
    if (initUnit === UNITS.KG) result = initNum / lbsToKg

    if (initUnit === UNITS.MI) result = initNum * miToKm
    if (initUnit === UNITS.KM) result = initNum / miToKm

    return Number.parseFloat(result.toFixed(5))
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  }
}

module.exports = ConvertHandler
