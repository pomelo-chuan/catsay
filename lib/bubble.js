import {
  generateChar,
  computeBreakPoint,
  getTextList,
  insertPadding,
} from './utils';

function bubble(text, { padding = 3, type = 'say' } = {}) {
  const breakPoint = computeBreakPoint(text);
  const textList = getTextList(text, breakPoint);
  const textListWithPadding = insertPadding(textList, padding);
  const divider = generateChar('-', breakPoint + padding * 2);
  const arrow = type === 'say' ?
    '  \\\n'
    + '   \\\n'
    : '  O\n' + '   o\n';
  const result = divider + '\n'
    + textListWithPadding.join('\n') + '\n'
    + divider + '\n'
    + arrow;
  return result;
}

export {
  bubble,
};
