# catsay

```
┌──────────────────────┐
│  Hello from catsay.  │
└──────────────────────┘
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

Specific eye and mouse
```
$ catsay I love you -E=d -M=U
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
  E: '9', // same as e
  eye: '9', // same as e
  m: 'w', // mouth of cat, default is m
  M: 'w', // same as m
  mouse: 'w', // same as m
  boxStyle: 'box' // box or topAndBottomLine, default is box
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
   /\___/\
  /       \
 |  ️Q   ️Q  |
>===  *  ===<
  \   O   /
    ======
  /       \ __
 |         |\ \
 |         |/ /
 |  || ||  |_/
  \_oo_oo_/

------------------------------
  boxStyle: topAndBottomLine  
------------------------------
  \
   \
   /\___/\
  /       \
 |  ️Q   ️Q  |
>===  *  ===<
  \   O   /
    ======
  /       \ __
 |         |\ \
 |         |/ /
 |  || ||  |_/
  \_oo_oo_/
```


