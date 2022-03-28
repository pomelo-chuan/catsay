#!/usr/bin/env node
const yargs = require('yargs')
  .usage('$0 [-M mouth_string] [-E eye_string] [-C cat_name_string] [-B bubble_style_string] text')
  .options({
    M: {
      default: 'm',
    },
    E: {
      default: '@',
    },
    C: {
      default: 'q',
    },
    B: {
      default: 'box',
    },
  })
  .describe({
    M: 'mouth of the cat',
    E: 'eye of the cat',
    C: 'which cat to display',
    B: 'style of bubble'
  })
  .help()
  .alias('h', 'help');

const { argv } = yargs;

const run = argv['$0'] === 'catsay' ? require('./dist/catsay.umd').say : require('./dist/catsay.umd').think;

if (argv._.length) {
  console.log(run(argv._.join(' '), argv));
} else {
  require('get-stdin')().then(data => {
    if (data) {
      console.log(run(require('strip-final-newline')(data)));
    }
  })
}
