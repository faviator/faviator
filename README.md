# faviator
A simple easy favicon generator.

[![Build Status](https://travis-ci.org/faviator/faviator.svg?branch=master)](https://travis-ci.org/faviator/faviator)
[![codecov](https://codecov.io/gh/faviator/faviator/branch/master/graph/badge.svg)](https://codecov.io/gh/faviator/faviator)

![Logo](favicon.png)

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

### CLI

```
> faviator -h
  Usage: faviator [options]

  A simple easy favicon generator.


  Options:

    -V, --version                   output the version number
    -s, --size <n>                  Width and height of the favicon (default: 16)
    -t, --text <value>              Text in the favicon (default: F)
    --dx <n>                        Move text horizontally (default: 0)
    --dy <n>                        Move text vertically (default: 0)
    --font-size <n>                 Font size of the text (default: 80)
    -f, --font-family <value>       Font family; please choose from Google Fonts (default: Dancing Script)
    -c, --font-color <value>        Color name/hex/rgb (default: white)
    -B, --background-color <value>  Background color of favicon (default: rgb(219, 59, 211))
    --border-width <n>              Width of the border (default: 5)
    -b, --border-color <value>      Color of the border (default: #0D1423)
    -R, --border-radius <n>         Short hand to set rx and ry (default: 5%)
    --rx <n>                        x-axis border radius
    --ry <n>                        y-axis border radius
    -o, --output <path>             If not specified, svg will be printed to stdout. You can use .svg/.jpeg/.jpg/.png extensions.
    -h, --help                      output usage information
```
By default, faviator will print the xml of the svg to stdout. 

Example:
```
> faviator -s 160
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 100 100">
  <defs>
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css?family=Dancing+Script');
    </style>
  </defs>

<rect x="2.5"
  y="2.5"
  rx="5%"
  ry="5%"
  width="95"
  height="95"
  fill="rgb(219, 59, 211)"></rect>

<text x="50"
  y="50"
  dx="0"
  dy="0"
  width="160"
  height="160"
  fill="white"
  font-size="80"
  font-family="Dancing Script"
  text-anchor="middle"
  alignment-baseline="central">F</text>

<rect x="2.5"
  y="2.5"
  rx="5%"
  ry="5%"
  width="95"
  height="95"
  fill-opacity="0"
  stroke="#0D1423"
  stroke-width="5"></rect>
</svg>
```

You can export the svg/jpeg/png to a file with the `-o` flag.
```
> faviator -s 160 -R 50% --font-size 55 -f tangerine --background-color 'rgb(37, 86, 209)' -o example/x.png --text 'f' --dx -5
```

x.png:

![x.png](example/x.png)

### Programatic API

Faviator provides three functions that generate the favicon as svg, jpeg or png. The API of the three functions are identical. They all return a promise that resolves to a `Buffer` that represents the favicon.

#### config
The config object takes in the following keys and generate the favicon correspondingly. Most values are self-explantory.

The following values are the default values if it is not defined. This defines the faviator's logo.
```javascript
const config = {
  size: 16,                     // the width and height of the generated image (in px) 
  text: 'F',
  dx: 0,                        // move the text from the 'center' horizontally
  dy: 0,                        // move the text from the 'center' vertically
  fontSize: 80,
  fontFamily: 'Dancing Script', // a font from Google Font
  fontColor: 'white',
  backgroundColor: 'rgb(219, 59, 211)',
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
  .then(buffer => buffer.toString())
  .then(svg => console.log(svg));

// output: the xml of the svg
```

#### faviator.jpeg(config) / faviator.jpg(config)

Example: 
```
const fs = require('fs');
const faviator = require('faviator');

faviator.jpeg(config).then(buffer => fs.writeFileSync('favicon.jpg', buffer));

// or 

faviator.jpg(config).then(buffer => fs.writeFileSync('favicon.jpg', buffer));
```

#### faviator.png(config)

Example: 
```
const fs = require('fs');
const faviator = require('faviator');

faviator.png(config).then(buffer => fs.writeFileSync('favicon.png', buffer));
```


## Author
Jason Yu <me@ycmjason.com>
