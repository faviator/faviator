#!/usr/bin/env/ node
const fs = require('fs');
const { extname } = require('path');

const program = require('commander');

const pkg = require('../package.json');

const faviator = require('../index');

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-s, --size <n>', 'Width and height of the favicon', 16)
  .option('-t, --text <value>', 'Text in the favicon', 'F')
  .option('--dx <n>', 'Move text horizontally', 0)
  .option('--dy <n>', 'Move text vertically', 0)
  .option('--font-size <n>', 'Font size of the text', 80)
  .option('-f, --font-family <value>', 'Font family; please choose from Google Fonts', 'Dancing Script')
  .option('-c, --font-color <value>', 'Color name/hex/rgb', 'white')
  .option('-B, --background-color <value>', 'Background color of favicon', '#4267b2')
  .option('--border-width <n>', 'Width of the border', 5)
  .option('-b, --border-color <value>', 'Color of the border', '#0D1423')
  .option('-R, --border-radius <n>', 'Short hand to set rx and ry', '5%')
  .option('--rx <n>', 'x-axis border radius')
  .option('--ry <n>', 'y-axis border radius')
  .option('-o, --output <path>', 'If not specified, svg will be printed to stdout. You can use .svg/.jpeg/.jpg/.png extensions.')
  .parse(process.argv);

const { output } = program;

if (output) {
  const ext = extname(output);

  if (output && !['.svg', '.jpeg', '.jpg', '.png'].includes(ext)) {
    console.error('\n  error: <path> extension must be .svg/.jpeg/.jpg/.png in output\n');
    process.exit(1);
  }

  faviator[ext.substring(1)](program).then(buffer => fs.writeFileSync(output, buffer));
}

faviator.svg(program).then(buffer => buffer.toString()).then(console.log).catch(console.error);
