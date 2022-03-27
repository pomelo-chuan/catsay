import stringWidth from "string-width";

function generateChar(char, num) {
  const list = [];
  for (let i = 0; i < num; i += 1) {
    list.push(char);
  }
  return list.join('')
}

function numberArrayMax(arr) {
  return arr.reduce(function (acc, cur) {
    return (acc > cur ? acc : cur);
  });
}

function computeBreakPoint(text) {
  if (text.indexOf('\n') > 0) {
    return numberArrayMax(text.split('\n').map(it => stringWidth(it)));
  }
  if (stringWidth(text) < 40) {
    return stringWidth(text);
  }
  return 40;
}

function getTextList(text, breakPoint) {
  if (text.indexOf('\n') >= 0) {
    return text.split('\n');
  }
  const lists = text.split('');
  const textList = [];
  let nextIndex = 0;
  lists.forEach(element => {
    if (!textList[nextIndex]) {
      textList[nextIndex] = '';
    }
    textList[nextIndex] += element;
    if (stringWidth(textList[nextIndex]) > breakPoint) {
      nextIndex += 1;
    }
  });
  return textList;
}

function border(textList, breakPoint, padding = 0) {
  const result = ['┌' + generateChar('─', breakPoint + padding * 2) + '┐'];
  textList.forEach(it => {
    result.push('│' +
      generateChar(' ', padding) +
      it +
      generateChar(' ', breakPoint - stringWidth(it)) +
      generateChar(' ', padding) +
      '│');
  });

  result.push('└' + generateChar('─', breakPoint + padding * 2) + '┘')
  return result;
}

function topAndBottomLine(textList, breakPoint, padding = 0) {
  const divider = generateChar('-', breakPoint + padding * 2);
  const result = [divider];
  textList.forEach(it => {
    result.push(generateChar(' ', padding) + it + generateChar(' ', padding));
  });
  result.push(divider);
  return result;
}

export {
  generateChar,
  numberArrayMax,
  computeBreakPoint,
  getTextList,
  border,
  topAndBottomLine,
}