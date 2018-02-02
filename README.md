# faviator
A simple easy favicon generator.

[![Build Status](https://travis-ci.org/ycmjason/faviator.svg?branch=master)](https://travis-ci.org/ycmjason/faviator)
[![codecov](https://codecov.io/gh/ycmjason/faviator/branch/master/graph/badge.svg)](https://codecov.io/gh/ycmjason/faviator)

## Install

```
npm install --save-dev faviator
```

Or globally:
```
npm install -g faviator
```

## How to use

You can use faviator easily programatically or as a cli tool. 

### Programatic API

Faviator provides three functions that generate the favicon as svg, jpeg or png. The API of the three functions are identical. They all return a promise that resolves to a `Buffer` that represents the favicon.

#### config
The config object takes in the following keys and generate the favicon correspondingly. Most values are self-explantory. The following values are the default values if it is not defined.
```javascript
const config = {
  size: 16,                     // the width and height of the generated image (in px) 
  text: 'F',
  dx: 0,                        // move the text from the 'center' horizontally
  dy: 0,                        // move the text from the 'center' vertically
  fontSize: 70, // change the font size
  fontFamily: 'Dancing Script', // a font from Google Font
  fontColor: 'white',
  backgroundColor: '#4267b2',
  borderWidth: 5,
  borderColor: '#0D1423',
  borderRadius,                 // rx and ry will be set to this if defined
  rx: '5%',                     // x-axis radius of the favicon
  ry: '5%',                     // y-axis radius of the favicon
};
```

#### faviator(config) / faviator.svg(config)

Example:
```javascript
const faviator = require('faviator');

faviator.svg(config)
  .then(buffer => buffer.toString()
  .then(svg => console.log(svg));

/* output:
 * <?xml version="1.0" standalone="no"?>
 * <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
 * <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 100 100">
 *   <defs>
 *     <style type="text/css">
 *       @import url('https://fonts.googleapis.com/css?family=Dancing+Script');
 *     </style>
 *   </defs>
 * 
 * <rect x="2.5"
 *   y="2.5"
 *   rx="5%"
 *   ry="5%"
 *   width="95"
 *   height="95"
 *   fill="#4267b2"></rect>
 * 
 * <text x="50"
 *   y="50"
 *   dx="0"
 *   dy="0"
 *   width="16"
 *   height="16"
 *   fill="white"
 *   font-size="80"
 *   font-family="Dancing Script"
 *   text-anchor="middle"
 *   alignment-baseline="central">F</text>
 * 
 * <rect x="2.5"
 *   y="2.5"
 *   rx="5%"
 *   ry="5%"
 *   width="95"
 *   height="95"
 *   fill-opacity="0"
 *   stroke="#0D1423"
 *   stroke-width="5"></rect>
 * </svg>
 * / 
```

