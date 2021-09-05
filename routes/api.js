'use strict'

const ConvertHandler = require('../controllers/convertHandler.js')

module.exports = function (app) {
  const convertHandler = new ConvertHandler()

  app.get('/api/convert', (req, res) => {
    const { input = '' } = req.query

    const initNum = convertHandler.getNum(input)
    const initUnit = convertHandler.getUnit(input)

    if (initUnit === 'invalid unit' && initNum === 'invalid number') return res.json('invalid number and unit')
    if (initUnit === 'invalid unit') return res.json('invalid unit')
    if (initNum === 'invalid number') return res.json('invalid number')

    const returnUnit = convertHandler.getReturnUnit(initUnit)
    const returnNum = convertHandler.convert(initNum, initUnit)
    const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)

    res.json({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string,
    })
  })
}
