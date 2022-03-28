import { bubble } from './bubble';
import { getCat } from './getCat';

function catsay(text, options = {}, type = 'say') {
  let _text = '';
  if (typeof text === 'string') {
    _text = text;
  }
  if (typeof text === 'number') {
    _text = String(text);
  }
  if (typeof text === 'object' && text.text) {
    _text = text.text;
  }
  const _options = typeof text === 'string' ? options : text;
  return bubble(_text, { type, B: _options.B, boxStyle: _options.boxStyle }) + getCat(_options);
}

const say = function (text, options) {
  return catsay(text, options, 'say');
}

const think = function (text, options) {
  return catsay(text, options, 'think');
}

export { say, think };
