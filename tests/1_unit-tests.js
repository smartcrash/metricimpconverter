const chai = require('chai')
let assert = chai.assert
const ConvertHandler = require('../controllers/convertHandler.js')

let convertHandler = new ConvertHandler()

suite('Unit Tests', function () {
  suite('convertHandler', () => {
    test('should correctly read a whole number input.')
    test('should correctly read a decimal number input.')
    test('should correctly read a fractional input.')
    test('should correctly read a fractional input with a decimal.')
    test('should correctly return an error on a double-fraction (i.e. 3/2/3).')
    test('should correctly default to a numerical input of 1 when no numerical input is provided.')
    test('should correctly read each valid input unit.')
    test('should correctly return an error for an invalid input unit.')
    test('should return the correct return unit for each valid input unit.')
    test('should correctly return the spelled-out string unit for each valid input unit.')
    test('should correctly convert gal to L.')
    test('should correctly convert L to gal.')
    test('should correctly convert mi to km.')
    test('should correctly convert km to mi.')
    test('should correctly convert lbs to kg.')
    test('should correctly convert kg to lbs.')
  })
})
