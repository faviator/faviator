const assert = require('assert');

const createSvgFavicon = require('../../lib/createSvgFavicon');
const removeNewLines = (s) => s.replace(/(\r|\n)/g, '');

describe('createSvgFavicon', function() {
  it('should generate the doctype tag', function() {
    assert((/<!doctype svg/i).test(createSvgFavicon()));
  });

  it('should generate a svg tag with width and height as specified in config.size', function() {
    const svg = removeNewLines(createSvgFavicon({ size: 100 }));
    assert.equal(svg.match(/<svg [^>]*?height="([^"]*)"/i)[1], '100');
    assert.equal(svg.match(/<svg [^>]*?width="([^"]*)"/i)[1], '100');
  });

  it('should generate a rect tag with rx, ry, fill, stroke-width, stroke', function() {
    const rx = '50%';
    const ry = '50%';
    const backgroundColor = '#03f53a';
    const borderWidth = '3';
    const borderColor = '#3057fa';
    const svg = removeNewLines(createSvgFavicon({
      rx,
      ry,
      backgroundColor,
      borderWidth,
      borderColor,
    }));
    assert.equal(svg.match(new RegExp(`<rect [^>]*?rx="([^"]*)"`, 'i'))[1], rx);
    assert.equal(svg.match(new RegExp(`<rect [^>]*?ry="([^"]*)"`, 'i'))[1], ry);
    assert.equal(svg.match(new RegExp(`<rect [^>]*?fill="([^"]*)"`, 'i'))[1], backgroundColor);
    assert.equal(svg.match(new RegExp(`<rect [^>]*?stroke-width="([^"]*)"`, 'i'))[1], borderWidth);
    assert.equal(svg.match(new RegExp(`<rect [^>]*?stroke="([^"]*)"`, 'i'))[1], borderColor);
  });

  it('should generate a rect tag with rx, ry with value borderRadius', function() {
    const borderRadius = '50%';
    const svg = removeNewLines(createSvgFavicon({
      borderRadius,
    }));
    assert.equal(svg.match(new RegExp(`<rect [^>]*?rx="([^"]*)"`, 'i'))[1], borderRadius);
    assert.equal(svg.match(new RegExp(`<rect [^>]*?rx="([^"]*)"`, 'i'))[1], borderRadius);
  });

  it('should generate a text tag with content text, fill, font-family, font-size', function() {
    const text = 'love';
    const fontColor = 'red';
    const fontFamily = 'Open Sans';
    const fontSize = 65;
    const svg = removeNewLines(createSvgFavicon({
      text,
      fontColor,
      fontFamily,
      fontSize,
    }));
    assert.equal(svg.match(new RegExp(`<text.*?>([^<]*)</text>`, 'i'))[1], text);
    assert.equal(svg.match(new RegExp(`<text [^>]*?fill="([^"]*)"`, 'i'))[1], fontColor);
    assert.equal(svg.match(new RegExp(`<text [^>]*?font-family="([^"]*)"`, 'i'))[1], fontFamily);
    assert.equal(svg.match(new RegExp(`<text [^>]*?font-size="([^"]*)"`, 'i'))[1], fontSize);
  });

  it('should generate a text tag with at center', function() {
    const svg = removeNewLines(createSvgFavicon());
    assert.equal(svg.match(new RegExp(`<text [^>]*?x="([^"]*)"`, 'i'))[1], '50');
    assert.equal(svg.match(new RegExp(`<text [^>]*?y="([^"]*)"`, 'i'))[1], '50');
    assert.equal(svg.match(new RegExp(`<text [^>]*?text-anchor="([^"]*)"`, 'i'))[1], 'middle');
    assert.equal(svg.match(new RegExp(`<text [^>]*?alignment-baseline="([^"]*)"`, 'i'))[1], 'central');
  });
});
