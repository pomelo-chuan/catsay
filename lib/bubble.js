import {
  computeBreakPoint,
  getTextList,
  border,
  topAndBottomLine
} from './utils';

function bubble(text, { padding = 2, type = 'say', boxStyle = 'box' } = {}) {
  let textList = [];
  const breakPoint = computeBreakPoint(text);
  textList = getTextList(text, breakPoint);
  if (boxStyle === 'topAndBottomLine') {
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
