const catsay = require('../dist/catsay.umd.js');

console.log(catsay.say('我爱你'));

console.log(catsay.say('Hello from catsay.'));

console.log(catsay.say({
  text: 'boxStyle: box',
  e: '️Q',
  m: 'O'
}));

console.log(catsay.say({
  text: 'boxStyle: topAndBottomLine',
  e: '️Q',
  m: 'O',
  boxStyle: 'topAndBottomLine'
}));

console.log(catsay.think(`昨夜三更雨
今朝一阵寒
海棠花在否
侧卧卷帘看`));
