module.exports = ({
  size = 250,
  text = 'f',
  dx = -3,
  dy = 0,
  rx = 0.05,
  ry = 0.05,
  fontSize = 70,
  fontFamily = 'Dancing Script',
  fontColor = 'white',
  backgroundColor = '#4267b2',
  borderWidth = 5,
  borderRadius,
  borderColor = '#0D1423',
} = {}) => `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <defs>
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css?family=${fontFamily.replace(/ /g, '+')}');
    </style>
  </defs>

<rect x="${parseFloat(borderWidth) / 2}"
  y="${parseFloat(borderWidth) / 2}"
  rx="${borderRadius || rx}"
  ry="${borderRadius || ry}"
  width="${100 - parseFloat(borderWidth)}"
  height="${100 - parseFloat(borderWidth)}"
  fill="${backgroundColor}"></rect>

<text x="50"
  y="50"
  dx="${dx}"
  dy="${dy}"
  width="${size}"
  height="${size}"
  fill="${fontColor}"
  font-size="${fontSize}"
  font-family="${fontFamily}"
  text-anchor="middle"
  alignment-baseline="central">${text}</text>

<rect x="${parseFloat(borderWidth) / 2}"
  y="${parseFloat(borderWidth) / 2}"
  rx="${borderRadius || rx}"
  ry="${borderRadius || ry}"
  width="${100 - parseFloat(borderWidth)}"
  height="${100 - parseFloat(borderWidth)}"
  fill-opacity="0"
  stroke="${borderColor}"
  stroke-width="${borderWidth}"></rect>
</svg>`;
