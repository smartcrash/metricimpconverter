const chaiHttp = require('chai-http')
const chai = require('chai')
const server = require('../server')
const { assert, expect } = chai

chai.use(chaiHttp)

suite('Functional Tests', function () {
  test('Convert a valid input such as 10L: GET request to /api/convert', done => {
    chai
      .request(server)
      .get('/api/convert?input=10L')
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.type, 'application/json')
        expect(res.body).to.eql({
          initNum: 10,
          initUnit: 'L',
          returnNum: 2.64172,
          returnUnit: 'gal',
          string: '10 liters converts to 2.64172 gallons',
        })
        done()
      })
  })

  test('Convert an invalid input such as 32g: GET request to /api/convert', done => {
    chai
      .request(server)
      .get('/api/convert?input=32g')
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.type, 'application/json')
        assert.equal(res.body, 'invalid unit')
        done()
      })
  })

  test('Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert', done => {
    chai
      .request(server)
      .get('/api/convert?input=3/7.2/4kg')
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.type, 'application/json')
        assert.equal(res.body, 'invalid number')
        done()
      })
  })

  test('Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert', done => {
    chai
      .request(server)
      .get('/api/convert?input=3/7.2/4kilomegagram')
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.type, 'application/json')
        assert.equal(res.body, 'invalid number and unit')
        done()
      })
  })

  test('Convert with no number such as kg: GET request to /api/convert', done => {
    chai
      .request(server)
      .get('/api/convert?input=kg')
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.type, 'application/json')
        expect(res.body).to.eql({
          initNum: 1,
          initUnit: 'kg',
          returnNum: 2.20462,
          returnUnit: 'lbs',
          string: '1 kilograms converts to 2.20462 pounds',
        })
        done()
      })
  })
})
