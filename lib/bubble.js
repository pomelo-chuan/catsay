import {
  computeBreakPoint,
  getTextList,
  border,
  topAndBottomLine
} from './utils';

function bubble(text, { padding = 2, type = 'say', boxStyle, B } = {}) {
  let textList = [];
  const _boxStyle = boxStyle || B || 'box'
  const breakPoint = computeBreakPoint(text);
  textList = getTextList(text, breakPoint);
  if (_boxStyle === 'topAndBottomLine') {
    textList = topAndBottomLine(textList, breakPoint, padding)
  } else {
    textList = border(textList, breakPoint, padding);
  }
  const arrow = type === 'say' ?
    '  \\\n'
    + '   \\\n'
    : '  O\n' + '   o\n';
  const result = textList.join('\n') + '\n'
    + arrow;
  return result;
}

export {
  bubble,
};
