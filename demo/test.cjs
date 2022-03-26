const catsay = require('../dist/catsay.js');

console.log(catsay.say('我爱你'));
console.log(catsay.say(123456789));

console.log(catsay.say({
  text: '我爱你',
  e: '9',
  m: 'w'
}));

console.log(catsay.think(`昨夜三更雨
今朝一阵寒
海棠花在否
侧卧卷帘看`));
