const svgToImg = require('@ycm.jason/svg-to-img');

const createSvgFavicon = require('@faviator/create-svg-favicon');

const faviator = (...args) => faviator.svg(...args);

faviator.svg = (...args) =>
  Promise.resolve(new Buffer(createSvgFavicon(...args)));

faviator.jpeg = (...args) => svgToImg.jpeg(createSvgFavicon(...args));
faviator.jpg = faviator.jpeg;

faviator.png = (...args) => svgToImg.png(createSvgFavicon(...args));

module.exports = faviator;
module.exports.default = faviator;
module.exports.faviatorIconConfig = createSvgFavicon.faviatorIconConfig;
