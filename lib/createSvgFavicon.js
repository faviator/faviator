module.exports = ({
  size = 250,
  text = 'f',
  dx = 0,
  dy = 0,
  fontSize = 70,
  fontFamily = 'Dhurjati',
  fontColor = 'white',
  backgroundColor = '#4267b2',
  borderWidth = 5,
  borderRadius = 0.05,
  borderColor = '#0D1423',
}) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <defs>
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css?family=${fontFamily.replace(/ /g, '+')}');
    </style>
  </defs>

<rect x="${borderWidth / 2}"
  y="${borderWidth / 2}"
  rx="${borderRadius}"
  ry="${borderRadius}"
  width="${100 - borderWidth}"
  height="${100 - borderWidth}"
  fill="${backgroundColor}"
  stroke="${borderColor}"
  stroke-width="${borderWidth}"></rect>

<text x="50"
  y="50"
  dx="${dx}"
  dy="${dy}"
  fill="${fontColor}"
  font-size="${fontSize}"
  font-family="${fontFamily}"
  text-anchor="middle"
  alignment-baseline="central">${text}</text>
</svg>`;
