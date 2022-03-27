# catsay

```
┌──────────────────────┐
│  Hello from catsay.  │
└──────────────────────┘
  \
   \
      |\_|\                
      |@.@ |_______________
      >\m_<          ______)
         \_  ______ \     
         / /   / / \ \   
        (_/   (_/   \_)   
```

`catsay` is a cat say something that you want to say in terminal. I love cat so I make it and it inspire by [cowsay](https://github.com/piuccio/cowsay).

## Install
```
$ npm i @miaos/catsay -g
```

## Usage
```
catsay I Love Cat.
```

or
```
catthink Cat is so cute.
```

## Use in js module
```javascript
const catsay = require('@miaos/catsay');
// or
import * as catsay from '@miaos/catsay'

console.log(catsay.say('我爱你'));

console.log(catsay.say({
  text: 'I Love You',
  e: '9', // eye of cat, default is @
  m: 'w', // mouth of cat, default is m
  boxStyle: 'box' // box or topAndBottomLine, default is box
}));
```

## boxStyle
```
┌───────────────┐
│  I love you.  │
└───────────────┘
  \
   \
      |\_|\
      |9.9 |_______________
      >\w_<          ______)
         \_  ______ \
         / /   / / \ \
        (_/   (_/   \_)
```
```
---------------
  I love you.
---------------
  \
   \
      |\_|\
      |9.9 |_______________
      >\w_<          ______)
         \_  ______ \
         / /   / / \ \
        (_/   (_/   \_)
```

## Use in browser
```html
<script src="path/to/catsay.umd.js"></script>
<style>
  pre {
    font-family: Consolas, Monaco, monospace;
  }
</style>

<pre id="cat"></pre>
<script>
  document.querySelector('#cat').innerHTML = catsay.think({ text: 'I love you.', boxStyle: 'topAndBottomLine' });
</script>

```

## Pipe
```
$ echo print by catsay | catsay
```
