const expect = require('chai').expect;
const deepClone = require('../lib/deepClone');

describe('deepClone()', function(){

  it('Should return an object', function() {
    const results = deepClone({first: 'Josh', last: 'Boyan'});
    expect(results).to.be.an('object');
  });

  it('Should create an exact copy', function() {
    const test = {first: 'Josh', last: 'Boyan'};
    const results = deepClone(test);
    expect(results).to.deep.equal(test);
  });

  it('Should not be a reference', function() {
    const other = {first: 'Josh', last: 'Boyan'}
    const test = {first: 'Josh', last: 'Boyan'};
    const results = deepClone(test);
    results.last ="otherName";
    expect(other).to.deep.equal(test);
  });

})