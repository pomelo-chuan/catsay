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

function insertPadding(textList, padding) {
  if (padding) {
    return textList.map(it => {
      return generateChar(' ', padding) + it + generateChar(' ', padding);
    });
  }
  return textList;
}

export {
  generateChar,
  numberArrayMax,
  computeBreakPoint,
  getTextList,
  insertPadding,
}