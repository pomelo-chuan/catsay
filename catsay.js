#!/usr/bin/env node
const yargs = require('yargs')
  .usage('$0 [-M mouth_string] [-E eye_string] text')
  .options({
    M: {
      default: 'm',
      type: 'string'
    },
    E: {
      default: '@',
      type: 'string'
    }
  })
  .describe({
    M: 'mouth of the cat',
    E: 'eye of the cat',
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
