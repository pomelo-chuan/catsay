# catsay

```
┌──────────────────────┐
│  Hello from catsay.  │
└──────────────────────┘
  \
   \
      |\_|\
      |@.@ |______________
      >\m<          ______)
         \_  ______ \
         / /   / / \ \
        (_/   (_/   \_)
```

`catsay` is a cat say something that you want to say in terminal. I always use [cowsay](https://github.com/piuccio/cowsay) to print some message but I love cat so I write `catsay`;

## Install
```
$ npm i @miaos/catsay -g
```

## Usage
```
$ catsay I Love Cat.
$ catthink Cat is so cute.
```

help
```
$ catsay -h
```

Specific eye, mouth, bubble style, cat.
```
$ catsay I love you -E=d -M=U -C=miao -B=topAndBottomLine
```

## Use in js module
```javascript
const catsay = require('@miaos/catsay');
// or
import * as catsay from '@miaos/catsay'

console.log(catsay.say('我爱你'));

console.log(catsay.say({
  text: 'I Love You',
  eye: '9', // eye of cat
  E: '9', // short for eye
  mouse: 'w', // mouse of cat
  M: 'w', // short for mouse
  boxStyle: 'box', // box or topAndBottomLine, default is box
  B: 'box', // short for boxStyle
}));

console.log(catsay.think('I Love You'));
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

## boxStyle
```
┌─────────────────┐
│  boxStyle: box  │
└─────────────────┘
  \
   \
      |\_|\
      |️Q.️Q |______________
      >\O<          ______)
         \_  ______ \
         / /   / / \ \
        (_/   (_/   \_)

------------------------------
  boxStyle: topAndBottomLine
------------------------------
  \
   \
      |\_|\
      |️Q.️Q |______________
      >\O<          ______)
         \_  ______ \
         / /   / / \ \
        (_/   (_/   \_)
```

## cat
```
┌─────────────┐
│  I am miao  │
└─────────────┘
  \
   \
   /\___/\
  /       \
 |  @   @  |
>===  *  ===<
  \   m   /
    ======
  /       \ __
 |         |\ \
 |         |/ /
 |  || ||  |_/
  \_oo_oo_/

┌──────────┐
│  I am Q  │
└──────────┘
  \
   \
      |\_|\
      |@.@ |______________
      >\m<          ______)
         \_  ______ \
         / /   / / \ \
        (_/   (_/   \_)
```