# catsay

A tiny ASCII tool that lets a cat say (or think) text in your terminal.

```text
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

`catsay` is inspired by [cowsay](https://github.com/piuccio/cowsay), but with cats.

## Install

```bash
npm i -g @miaos/catsay
```

- Node.js: `>=18`
- Global commands: `catsay`, `catthink`

## Quick Start

```bash
catsay I love cats
catthink Cat is thinking...
```

You can also read from stdin:

```bash
echo "hello from pipe" | catsay
```

Show help:

```bash
catsay -h
```

## CLI Options

| Option | Description | Default |
| --- | --- | --- |
| `-E` | Eye character | `@` |
| `-M` | Mouth character | `m` |
| `-C` | Cat style (`q` / `miao` / `mochi`) | `q` |
| `-B` | Bubble style (`box` / `topAndBottomLine`) | `box` |
| `-W`, `--maxWidth` | Max line width before wrapping | `40` |

Example:

```bash
catsay "I love you" -E o -M w -C mochi -B topAndBottomLine -W 30
```

## Use in JavaScript / TypeScript

```ts
import { say, think } from '@miaos/catsay';

console.log(say('Hello'));

console.log(
  say({
    text: 'I Love You',
    eye: '9',     // same as E
    E: '9',
    mouth: 'w',   // same as M
    M: 'w',
    cat: 'mochi', // same as C
    C: 'mochi',
    boxStyle: 'box', // or topAndBottomLine, same as B
    B: 'box',
    maxWidth: 40, // same as W
    W: 40,
    padding: 1,
  }),
);

console.log(think('Thinking...'));
```

### API

- `say(input, options?)`
- `think(input, options?)`
- `catsay(input, options?, type?)`

`input` supports:

- `string`
- `number`
- `CatOptions`

`CatOptions` fields:

- `text?: string | number`
- `eye?: string` / `E?: string`
- `mouth?: string` / `M?: string`
- `mouse?: string` (deprecated typo alias, use `mouth`)
- `cat?: string` / `C?: string`
- `boxStyle?: 'box' | 'topAndBottomLine'` / `B?: ...`
- `padding?: number`
- `maxWidth?: number` / `W?: number`

## Browser Usage

```html
<script src="path/to/catsay.umd.js"></script>
<pre id="cat" style="font-family: Consolas, Monaco, monospace"></pre>
<script>
  document.querySelector('#cat').textContent = catsay.think({
    text: 'I love you.',
    boxStyle: 'topAndBottomLine',
  });
</script>
```

## Bubble Styles

`box`:

```text
┌─────────────────┐
│  boxStyle: box  │
└─────────────────┘
```

`topAndBottomLine`:

```text
------------------------------
  boxStyle: topAndBottomLine
------------------------------
```

## Cat Styles

- `q` (default)
- `miao`
- `mochi`

## Local Development

```bash
npm install
npm run build
npm test
```

Build output is in `dist/`.
