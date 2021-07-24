const chai = require('chai')
let assert = chai.assert
const ConvertHandler = require('../controllers/convertHandler.js')

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
      test('should correctly read each valid input unit.')
      test('should correctly return an error for an invalid input unit.')
    })

    suite('#getReturnUnit ', () => {
      test('should return the correct return unit for each valid input unit.')
    })

    suite('#spellOutUnit', () => {
      test('should correctly return the spelled-out string unit for each valid input unit.')
    })

    suite('#convert', () => {
      test('should correctly convert gal to L.')
      test('should correctly convert L to gal.')
      test('should correctly convert mi to km.')
      test('should correctly convert km to mi.')
      test('should correctly convert lbs to kg.')
      test('should correctly convert kg to lbs.')
    })
  })
})
