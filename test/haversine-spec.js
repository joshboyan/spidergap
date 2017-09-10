const expect = require('chai').expect;
const haversine = require('../lib/haversine');
const pass = require('./test-data-pass.json');
const fail = require('./test-data-fail.json');

describe('haversine()', function(){

  it('Returns an array', function(){
    results = haversine(pass);
    expect(results).to.be.an('array');
  });

  it('Returns 3 partners', function(){
    results = haversine(pass);
    expect(results.length).to.equal(3);
  });

  it('Returns 0 partners', function(){
    results = haversine(fail);
    expect(results.length).to.equal(0);
  });

})