var pow = require('../js/pow.js');

describe("pow", function() {
  it("pow method", function() {

    var result;

    result = pow(12, 2);

    expect(result).toEqual(144);
  });
});
