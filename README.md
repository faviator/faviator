# faviator
> A simple easy favicon generator.

[![Build Status](https://travis-ci.org/faviator/faviator.svg?branch=master)](https://travis-ci.org/faviator/faviator)
[![codecov](https://codecov.io/gh/faviator/faviator/branch/master/graph/badge.svg)](https://codecov.io/gh/faviator/faviator)

![Logo](favicon.png)

## Playground
Manually changing the config and generate the favicon to see the result might be time consuming. A faviator playground is created to allow us to tweak the config and view the result instantly.

[Click here to go to the playground.](https://www.faviator.xyz/playground)

## Install

CLI:
```
npm install -g faviator
```

Programatic API:
```
npm install --save-dev faviator
```

## How to use (CLI)

```
> faviator -h
    Usage: faviator [options]

  A simple easy favicon generator.


  Options:

    -V, --version                   output the version number
    -s, --size <n>                  Width and height of the favicon
    -t, --text <value>              Text in the favicon
    --dx <n>                        Move text horizontally
    --dy <n>                        Move text vertically
    --font-size <n>                 Font size of the text
    -f, --font-family <value>       Font family; please choose from Google Fonts
    --font-weight <value>           Font weight; please choose from Google Fonts
    --font-color <value>            Color name/hex/rgb
    -B, --background-color <value>  Background color of favicon
    --border-width <n>              Width of the border
    -b, --border-color <value>      Color of the border
    -R, --border-radius <n>         Short hand to set rx and ry
    --rx <n>                        x-axis border radius
    --ry <n>                        y-axis border radius
    -c, --config <path>             use a config file to draw
    -o, --output <path>             If not specified, svg will be printed to stdout. You can use .svg/.jpeg/.jpg/.png extensions.
    -h, --help                      output usage information
```

--------

By default, faviator will print the xml of the svg to stdout.

Example:
```
> faviator --size '160' --text 'Fav' --dy '19.5' --font-size '32' --font-family 'Roboto' --font-color 'skyblue' --font-weight '700' --background-color 'navy' --border-width '11.5' --border-color 'skyblue' --border-radius '18.5'
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 100 100">
  <defs>
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css?family=Roboto:700');
    </style>
  </defs>

<rect x="5.75"
  y="5.75"
  rx="18.5"
  ry="18.5"
  width="88.5"
  height="88.5"
  fill="navy"></rect>

<text x="50"
  y="50"
  dx="0"
  dy="19.5"
  width="160"
  height="160"
  fill="skyblue"
  font-size="32"
  font-family="Roboto"
  text-anchor="middle"
  alignment-baseline="central">Fav</text>

<rect x="5.75"
  y="5.75"
  rx="18.5"
  ry="18.5"
  width="88.5"
  height="88.5"
  fill-opacity="0"
  stroke="skyblue"
  stroke-width="11.5"></rect>
</svg>
```

![0.svg](example/0.svg)

-----

You can export the svg/jpeg/png to a file with the `-o` flag.
```
> faviator --size '160' \
           --text 'f' \
           --dx '-5' \
           --dy '0' \
           --font-size '55' \
           --font-family 'Tangerine' \
           --font-color '#75b7ff' \
           --font-weight '700' \
           --background-color 'rgb(37, 86, 209)' \
           --border-width '3.5' \
           --border-color '#75b7ff' \
           --border-radius '0' \
           -o example/1.png
```

1.png:

![1.png](example/1.png)

-------

You should also save your config to a json file so that you can reproduce your design.

```
> faviator -c path/to/config.json \
           -o example/2.png
```

2.png:

![2.png](example/2.png)

## How to use? (Programatic API)

Faviator provides three functions that generate the favicon as svg, jpeg or png. The API of the three functions are identical. They all return a promise that resolves to a `Buffer` that represents the favicon.

### config
The config object takes in the following keys and generate the favicon correspondingly. Most values are self-explantory.

The following values are the default values if it is not defined. This defines the faviator's logo.
```javascript
const config = {
  size: 16,            // the width and height of the generated image (in px)
  text: '',
  dx: 0,               // move the text from the 'center' horizontally
  dy: 0,               // move the text from the 'center' vertically
  fontSize: 0,
  fontFamily: '',      // a font from Google Font
  fontColor: '',
  fontWeight: '',      // the weight of the font from Google Font
  backgroundColor: '',
  borderWidth: 0,
  borderColor: '',
  borderRadius: 0,     // rx and ry will be set to this if defined
  rx: 0,               // x-axis radius of the favicon
  ry: 0,               // y-axis radius of the favicon
};
```

### faviator(config) / faviator.svg(config)

Example:
```javascript
const faviator = require('faviator');

faviator.svg(config)
  .then(buffer => buffer.toString())
  .then(svg => console.log(svg));

// output: the xml of the svg
```

### faviator.jpeg(config) / faviator.jpg(config)

Example:
```
const fs = require('fs');
const faviator = require('faviator');

faviator.jpeg(config).then(buffer => fs.writeFileSync('favicon.jpg', buffer));

// or

faviator.jpg(config).then(buffer => fs.writeFileSync('favicon.jpg', buffer));
```

### faviator.png(config)

Example:
```
const fs = require('fs');
const faviator = require('faviator');

faviator.png(config).then(buffer => fs.writeFileSync('favicon.png', buffer));
```

## How to use the icon generated?

After generating the icon, you could simply add the following line in your `<head>` tag.

PNG:
```html
<link rel="icon" href="favicon.png" type="image/png">
```

JPG:
```html
<link rel="icon" href="favicon.jpg" type="image/jpg">
```

## Author
Jason Yu <me@ycmjason.com>
