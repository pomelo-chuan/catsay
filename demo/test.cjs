const catsay = require('../dist/catsay.umd.js');

console.log(catsay.say('我爱你'));

console.log(catsay.say('Hello from catsay.'));

console.log(catsay.say({
  text: 'I love you.',
  e: '9',
  m: 'w'
}));

console.log(catsay.think(`昨夜三更雨
今朝一阵寒
海棠花在否
侧卧卷帘看`));
