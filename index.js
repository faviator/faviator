const svg2jpeg = require('convert-svg-to-jpeg').convert;
const svg2png = require('convert-svg-to-png').convert;

const createSvgFavicon = require('./lib/createSvgFavicon');

const faviator = (...args) => Promise.resolve(createSvgFavicon(...args));

faviator.jpeg = (...args) => svg2jpeg(createSvgFavicon(...args));
faviator.jpg = faviator.jpeg;
faviator.png = (...args) => svg2png(createSvgFavicon(...args));

module.exports = faviator;
