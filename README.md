# catsay

```
------------------------
   Hello from catsay.
------------------------
  \
   \
      |\_|\
      |@.@ |______________
      >\m_<          _____)
         \_  ______ \
         / /   / / \ \
        (_/   (_/   \_)
```

`catsay` is a cat say something that you want to say in terminal. Inspire by [cowsay](https://github.com/piuccio/cowsay).

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

## Use in js api
```javascript
import { say, think } from '@miaos/catsay';

console.log(catsay.say('我爱你'));

console.log(catsay.say({
  text: 'I Love You',
  e: '9',
  m: 'w'
}));
```

## Pipe
```
$ echo print by catsay | catsay
```
