import stringWidth from 'string-width';

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function generateChar(_char, num) {
  var list = [];

  for (var i = 0; i < num; i += 1) {
    list.push(_char);
  }

  return list.join('');
}

function numberArrayMax(arr) {
  return arr.reduce(function (acc, cur) {
    return acc > cur ? acc : cur;
  });
}

function computeBreakPoint(text) {
  if (text.indexOf('\n') > 0) {
    return numberArrayMax(text.split('\n').map(function (it) {
      return stringWidth(it);
    }));
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

  var lists = text.split('');
  var textList = [];
  var nextIndex = 0;
  lists.forEach(function (element) {
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

function border(textList, breakPoint) {
  var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var result = ['┌' + generateChar('─', breakPoint + padding * 2) + '┐'];
  textList.forEach(function (it) {
    result.push('│' + generateChar(' ', padding) + it + generateChar(' ', breakPoint - stringWidth(it)) + generateChar(' ', padding) + '│');
  });
  result.push('└' + generateChar('─', breakPoint + padding * 2) + '┘');
  return result;
}

function topAndBottomLine(textList, breakPoint) {
  var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var divider = generateChar('-', breakPoint + padding * 2);
  var result = [divider];
  textList.forEach(function (it) {
    result.push(generateChar(' ', padding) + it + generateChar(' ', padding));
  });
  result.push(divider);
  return result;
}

function bubble(text) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 2 : _ref$padding,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'say' : _ref$type,
      boxStyle = _ref.boxStyle,
      B = _ref.B;

  var textList = [];

  var _boxStyle = boxStyle || B || 'box';

  var breakPoint = computeBreakPoint(text);
  textList = getTextList(text, breakPoint);

  if (_boxStyle === 'topAndBottomLine') {
    textList = topAndBottomLine(textList, breakPoint, padding);
  } else {
    textList = border(textList, breakPoint, padding);
  }

  var arrow = type === 'say' ? '  \\\n' + '   \\\n' : '  O\n' + '   o\n';
  var result = textList.join('\n') + '\n' + arrow;
  return result;
}

function getCat(options) {
  var _ref = options || {},
      eye = _ref.eye,
      E = _ref.E,
      mouth = _ref.mouth,
      M = _ref.M,
      cat = _ref.cat,
      C = _ref.C;

  var miao = '   /\\___/\\\n' + '  /       \\\n' + ' |  EYE   EYE  |\n' + '>===  *  ===<\n' + '  \\   MOUTH   /\n' + '    ======\n' + '  /       \\ __\n' + ' |         |\\ \\\n' + ' |         |/ /\n' + ' |  || ||  |_/\n' + '  \\_oo_oo_/\n';
  var q = '      |\\_|\\                \n' + '      |EYE.EYE |______________\n' + '      >\\MOUTH<          ______)\n' + '         \\_  ______ \\     \n' + '         / /   / / \\ \\   \n' + '        (_/   (_/   \\_)   \n';
  var catMap = {
    q: q,
    miao: miao
  };
  var tpl = catMap[cat || C] || q;
  return tpl.replace(/EYE/g, eye || E || '@').replace(/MOUTH/g, mouth || M || 'm');
}

function catsay(text) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'say';
  var _text = '';

  if (typeof text === 'string') {
    _text = text;
  }

  if (typeof text === 'number') {
    _text = String(text);
  }

  if (_typeof(text) === 'object' && text.text) {
    _text = text.text;
  }

  var _options = typeof text === 'string' ? options : text;

  return bubble(_text, {
    type: type,
    B: _options.B,
    boxStyle: _options.boxStyle
  }) + getCat(_options);
}

var say = function say(text, options) {
  return catsay(text, options, 'say');
};

var think = function think(text, options) {
  return catsay(text, options, 'think');
};

export { say, think };
