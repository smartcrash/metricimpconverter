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

    if (!Object.values(UNITS).includes(result)) return 'invalid unit'

    return result
  }

  this.getReturnUnit = function (initUnit) {
    if (initUnit === UNITS.KM) return UNITS.MI
    if (initUnit === UNITS.MI) return UNITS.KM
    if (initUnit === UNITS.LB) return UNITS.KG
    if (initUnit === UNITS.KG) return UNITS.LB
    if (initUnit === UNITS.GAL) return UNITS.L
    if (initUnit === UNITS.L) return UNITS.GAL
  }

  this.spellOutUnit = function (unit) {
    return {
      [UNITS.MI]: 'miles',
      [UNITS.KM]: 'kilometres',
      [UNITS.KG]: 'kilograms',
      [UNITS.LB]: 'pound',
      [UNITS.L]: 'liters',
      [UNITS.GAL]: 'gallons',
    }[unit]
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
