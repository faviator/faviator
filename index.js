const svg2jpeg = require('convert-svg-to-jpeg').convert;
const svg2png = require('convert-svg-to-png').convert;

const createSvgFavicon = require('@faviator/create-svg-favicon');

const faviator = (...args) => faviator.svg(...args);

faviator.svg = (...args) => Promise.resolve(new Buffer(createSvgFavicon(...args)));

faviator.jpeg = (...args) => svg2jpeg(createSvgFavicon(...args));
faviator.jpg = faviator.jpeg;

faviator.png = (...args) => svg2png(createSvgFavicon(...args));

module.exports = faviator;
module.exports.default = faviator;
