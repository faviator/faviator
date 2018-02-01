const assert = require('assert');

const createSvgFavicon = require('../lib/createSvgFavicon');
const faviator = require('../index');

describe('index.js', function() {
  it('should export createSvgFavicon', function() {
    assert.equal(faviator, createSvgFavicon);
  });
});
