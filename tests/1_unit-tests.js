const chai = require('chai')
let assert = chai.assert
const ConvertHandler = require('../controllers/convertHandler.js')
const { UNITS } = require('../constants')

const rand = (min = 0, max) => {
  return Math.random() * (max - min + 1) + min
}

let convertHandler = new ConvertHandler()

suite('Unit Tests', function () {
  suite('convertHandler', () => {
    suite('#getNum', () => {
      const { getNum } = convertHandler

      test('should correctly read a whole number input.', () => {
        const expected = 4
        const actual = getNum('4gal')

        assert.equal(actual, expected)
      })

      test('should correctly read a decimal number input.', () => {
        const expected = 5.4
        const actual = getNum('5.4lbs')

        assert.equal(actual, expected)
      })

      test('should correctly read a fractional input.', () => {
        const expected = 5 / 3
        const actual = getNum('5/3km')

        assert.equal(actual, expected)
      })

      test('should correctly read a fractional input with a decimal.', () => {
        const expected = 5.4 / 3
        const actual = getNum('5.4/3kg')

        assert.equal(actual, expected)
      })

      test('should correctly return an error on a double-fraction (i.e. 3/2/3).', () => {
        const expected = 'invalid number'
        const actual = getNum('3/2/3gal')

        assert.equal(actual, expected)
      })

      test('should correctly default to a numerical input of 1 when no numerical input is provided.', () => {
        const expected = 1
        const actual = getNum('lbs')

        assert.equal(actual, expected)
      })
    })

    suite('#getUnit', () => {
      const { getUnit } = convertHandler

      test('should correctly read each valid input unit.', () => {
        Object.values(UNITS).forEach(unit => {
          const expected = unit
          const actual = getUnit(`${rand(1, 10)}${unit}`)

          assert.equal(actual, expected)
        })
      })

      test('should correctly return an error for an invalid input unit.', () => {
        const expected = 'invalid unit'
        const actual = getUnit('1foo')

        assert.equal(actual, expected)
      })
    })

    suite('#getReturnUnit ', () => {
      const { getReturnUnit } = convertHandler

      test('should return the correct return unit for each valid input unit.', () => {
        assert.equal(UNITS.KM, getReturnUnit(UNITS.MI))
        assert.equal(UNITS.MI, getReturnUnit(UNITS.KM))
        assert.equal(UNITS.LBS, getReturnUnit(UNITS.KG))
        assert.equal(UNITS.KG, getReturnUnit(UNITS.LBS))
        assert.equal(UNITS.GAL, getReturnUnit(UNITS.L))
        assert.equal(UNITS.L, getReturnUnit(UNITS.GAL))
      })
    })

    suite('#spellOutUnit', () => {
      const { spellOutUnit } = convertHandler

      test('should correctly return the spelled-out string unit for each valid input unit.', () => {
        assert.equal('miles', spellOutUnit(UNITS.MI))
        assert.equal('kilometres', spellOutUnit(UNITS.KM))
        assert.equal('kilograms', spellOutUnit(UNITS.KG))
        assert.equal('pounds', spellOutUnit(UNITS.LBS))
        assert.equal('liters', spellOutUnit(UNITS.L))
        assert.equal('gallons', spellOutUnit(UNITS.GAL))
      })
    })

    suite('#convert', () => {
      const { convert } = convertHandler

      test('should correctly convert gal to L.', function () {
        assert.equal(convert(1, UNITS.GAL).toFixed(5), '3.78541')
      })

      test('should correctly convert L to gal.', function () {
        assert.equal(convert(1, UNITS.L).toFixed(5), '0.26417')
      })

      test('should correctly convert mi to km.', function () {
        assert.equal(convert(1, UNITS.MI).toFixed(5), '1.60934')
      })

      test('should correctly convert km to mi.', function () {
        assert.equal(convert(1, UNITS.KM).toFixed(4), '0.6214')
      })

      test('should correctly convert lbs to kg.', function () {
        assert.equal(convert(1, UNITS.LBS).toFixed(4), '0.4536')
      })

      test('should correctly convert kg to lbs.', function () {
        assert.equal(convert(1, UNITS.KG).toFixed(3), '2.205')
      })
    })
  })
})
