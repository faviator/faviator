const assert = require('assert');
const proxyquire = require('proxyquire');
const sinon = require('sinon');

const createSvgFavicon = require('@faviator/create-svg-favicon');

describe('faviator [index.js]', function() {
  this.timeout(5000);
  beforeEach(function() {
    this.stubs = {
      'convert-svg-to-jpeg': {
        convert: sinon.stub().resolves('some-jpeg'),
      },
      'convert-svg-to-png': {
        convert: sinon.stub().resolves('some-png'),
      },
    };
    this.faviator = proxyquire('../lib/index', this.stubs);
  });

  it('should call .svg', function(next) {
    sinon.stub(this.faviator, 'svg').resolves('hello');
    this.faviator().then(v => {
      assert.equal(v, 'hello');
      assert(this.faviator.svg.called);
    }).then(next);
  });

  describe('.svg', function() {
    it('should wrap createSvgFavicon() in a Promise', function(next) {
      this.faviator.svg().then(svg => {
        assert.equal(svg.toString(), createSvgFavicon());
      }).then(() => next(), next);
    });
  });

  describe('.jpg', function() {

    it('should have alias .jpeg', function() {
      assert.equal(this.faviator.jpeg, this.faviator.jpg);
    });

    it('should call convert-svg-to-jpeg.convert', function(next) {
      this.faviator.jpg().then(v => {
        assert.equal(v, 'some-jpeg');
        assert(this.stubs['convert-svg-to-jpeg'].convert.called);
        next();
      });
    });

  });

  describe('.png', function() {

    it('should call convert-svg-to-png.convert', function(next) {
      this.faviator.png().then(v => {
        assert.equal(v, 'some-png');
        assert(this.stubs['convert-svg-to-png'].convert.called);
        next();
      });
    });

  });

  describe('.faviatorIconConfig', function() {

    it('should not be undefined', function() {
      assert(typeof this.faviator.faviatorIconConfig === 'object');
      assert(this.faviator.faviatorIconConfig !== null);
    });

  });
});
