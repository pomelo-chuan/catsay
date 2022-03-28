(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.catsay = {}));
})(this, (function (exports) { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function ansiRegex() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$onlyFirst = _ref.onlyFirst,
        onlyFirst = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;

    var pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
    return new RegExp(pattern, onlyFirst ? undefined : 'g');
  }

  function stripAnsi(string) {
    if (typeof string !== 'string') {
      throw new TypeError("Expected a `string`, got `".concat(_typeof(string), "`"));
    }

    return string.replace(ansiRegex(), '');
  }

  var eastasianwidth = {exports: {}};

  (function (module) {
    var eaw = {};

    {
      module.exports = eaw;
    }

    eaw.eastAsianWidth = function (character) {
      var x = character.charCodeAt(0);
      var y = character.length == 2 ? character.charCodeAt(1) : 0;
      var codePoint = x;

      if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
        x &= 0x3FF;
        y &= 0x3FF;
        codePoint = x << 10 | y;
        codePoint += 0x10000;
      }

      if (0x3000 == codePoint || 0xFF01 <= codePoint && codePoint <= 0xFF60 || 0xFFE0 <= codePoint && codePoint <= 0xFFE6) {
        return 'F';
      }

      if (0x20A9 == codePoint || 0xFF61 <= codePoint && codePoint <= 0xFFBE || 0xFFC2 <= codePoint && codePoint <= 0xFFC7 || 0xFFCA <= codePoint && codePoint <= 0xFFCF || 0xFFD2 <= codePoint && codePoint <= 0xFFD7 || 0xFFDA <= codePoint && codePoint <= 0xFFDC || 0xFFE8 <= codePoint && codePoint <= 0xFFEE) {
        return 'H';
      }

      if (0x1100 <= codePoint && codePoint <= 0x115F || 0x11A3 <= codePoint && codePoint <= 0x11A7 || 0x11FA <= codePoint && codePoint <= 0x11FF || 0x2329 <= codePoint && codePoint <= 0x232A || 0x2E80 <= codePoint && codePoint <= 0x2E99 || 0x2E9B <= codePoint && codePoint <= 0x2EF3 || 0x2F00 <= codePoint && codePoint <= 0x2FD5 || 0x2FF0 <= codePoint && codePoint <= 0x2FFB || 0x3001 <= codePoint && codePoint <= 0x303E || 0x3041 <= codePoint && codePoint <= 0x3096 || 0x3099 <= codePoint && codePoint <= 0x30FF || 0x3105 <= codePoint && codePoint <= 0x312D || 0x3131 <= codePoint && codePoint <= 0x318E || 0x3190 <= codePoint && codePoint <= 0x31BA || 0x31C0 <= codePoint && codePoint <= 0x31E3 || 0x31F0 <= codePoint && codePoint <= 0x321E || 0x3220 <= codePoint && codePoint <= 0x3247 || 0x3250 <= codePoint && codePoint <= 0x32FE || 0x3300 <= codePoint && codePoint <= 0x4DBF || 0x4E00 <= codePoint && codePoint <= 0xA48C || 0xA490 <= codePoint && codePoint <= 0xA4C6 || 0xA960 <= codePoint && codePoint <= 0xA97C || 0xAC00 <= codePoint && codePoint <= 0xD7A3 || 0xD7B0 <= codePoint && codePoint <= 0xD7C6 || 0xD7CB <= codePoint && codePoint <= 0xD7FB || 0xF900 <= codePoint && codePoint <= 0xFAFF || 0xFE10 <= codePoint && codePoint <= 0xFE19 || 0xFE30 <= codePoint && codePoint <= 0xFE52 || 0xFE54 <= codePoint && codePoint <= 0xFE66 || 0xFE68 <= codePoint && codePoint <= 0xFE6B || 0x1B000 <= codePoint && codePoint <= 0x1B001 || 0x1F200 <= codePoint && codePoint <= 0x1F202 || 0x1F210 <= codePoint && codePoint <= 0x1F23A || 0x1F240 <= codePoint && codePoint <= 0x1F248 || 0x1F250 <= codePoint && codePoint <= 0x1F251 || 0x20000 <= codePoint && codePoint <= 0x2F73F || 0x2B740 <= codePoint && codePoint <= 0x2FFFD || 0x30000 <= codePoint && codePoint <= 0x3FFFD) {
        return 'W';
      }

      if (0x0020 <= codePoint && codePoint <= 0x007E || 0x00A2 <= codePoint && codePoint <= 0x00A3 || 0x00A5 <= codePoint && codePoint <= 0x00A6 || 0x00AC == codePoint || 0x00AF == codePoint || 0x27E6 <= codePoint && codePoint <= 0x27ED || 0x2985 <= codePoint && codePoint <= 0x2986) {
        return 'Na';
      }

      if (0x00A1 == codePoint || 0x00A4 == codePoint || 0x00A7 <= codePoint && codePoint <= 0x00A8 || 0x00AA == codePoint || 0x00AD <= codePoint && codePoint <= 0x00AE || 0x00B0 <= codePoint && codePoint <= 0x00B4 || 0x00B6 <= codePoint && codePoint <= 0x00BA || 0x00BC <= codePoint && codePoint <= 0x00BF || 0x00C6 == codePoint || 0x00D0 == codePoint || 0x00D7 <= codePoint && codePoint <= 0x00D8 || 0x00DE <= codePoint && codePoint <= 0x00E1 || 0x00E6 == codePoint || 0x00E8 <= codePoint && codePoint <= 0x00EA || 0x00EC <= codePoint && codePoint <= 0x00ED || 0x00F0 == codePoint || 0x00F2 <= codePoint && codePoint <= 0x00F3 || 0x00F7 <= codePoint && codePoint <= 0x00FA || 0x00FC == codePoint || 0x00FE == codePoint || 0x0101 == codePoint || 0x0111 == codePoint || 0x0113 == codePoint || 0x011B == codePoint || 0x0126 <= codePoint && codePoint <= 0x0127 || 0x012B == codePoint || 0x0131 <= codePoint && codePoint <= 0x0133 || 0x0138 == codePoint || 0x013F <= codePoint && codePoint <= 0x0142 || 0x0144 == codePoint || 0x0148 <= codePoint && codePoint <= 0x014B || 0x014D == codePoint || 0x0152 <= codePoint && codePoint <= 0x0153 || 0x0166 <= codePoint && codePoint <= 0x0167 || 0x016B == codePoint || 0x01CE == codePoint || 0x01D0 == codePoint || 0x01D2 == codePoint || 0x01D4 == codePoint || 0x01D6 == codePoint || 0x01D8 == codePoint || 0x01DA == codePoint || 0x01DC == codePoint || 0x0251 == codePoint || 0x0261 == codePoint || 0x02C4 == codePoint || 0x02C7 == codePoint || 0x02C9 <= codePoint && codePoint <= 0x02CB || 0x02CD == codePoint || 0x02D0 == codePoint || 0x02D8 <= codePoint && codePoint <= 0x02DB || 0x02DD == codePoint || 0x02DF == codePoint || 0x0300 <= codePoint && codePoint <= 0x036F || 0x0391 <= codePoint && codePoint <= 0x03A1 || 0x03A3 <= codePoint && codePoint <= 0x03A9 || 0x03B1 <= codePoint && codePoint <= 0x03C1 || 0x03C3 <= codePoint && codePoint <= 0x03C9 || 0x0401 == codePoint || 0x0410 <= codePoint && codePoint <= 0x044F || 0x0451 == codePoint || 0x2010 == codePoint || 0x2013 <= codePoint && codePoint <= 0x2016 || 0x2018 <= codePoint && codePoint <= 0x2019 || 0x201C <= codePoint && codePoint <= 0x201D || 0x2020 <= codePoint && codePoint <= 0x2022 || 0x2024 <= codePoint && codePoint <= 0x2027 || 0x2030 == codePoint || 0x2032 <= codePoint && codePoint <= 0x2033 || 0x2035 == codePoint || 0x203B == codePoint || 0x203E == codePoint || 0x2074 == codePoint || 0x207F == codePoint || 0x2081 <= codePoint && codePoint <= 0x2084 || 0x20AC == codePoint || 0x2103 == codePoint || 0x2105 == codePoint || 0x2109 == codePoint || 0x2113 == codePoint || 0x2116 == codePoint || 0x2121 <= codePoint && codePoint <= 0x2122 || 0x2126 == codePoint || 0x212B == codePoint || 0x2153 <= codePoint && codePoint <= 0x2154 || 0x215B <= codePoint && codePoint <= 0x215E || 0x2160 <= codePoint && codePoint <= 0x216B || 0x2170 <= codePoint && codePoint <= 0x2179 || 0x2189 == codePoint || 0x2190 <= codePoint && codePoint <= 0x2199 || 0x21B8 <= codePoint && codePoint <= 0x21B9 || 0x21D2 == codePoint || 0x21D4 == codePoint || 0x21E7 == codePoint || 0x2200 == codePoint || 0x2202 <= codePoint && codePoint <= 0x2203 || 0x2207 <= codePoint && codePoint <= 0x2208 || 0x220B == codePoint || 0x220F == codePoint || 0x2211 == codePoint || 0x2215 == codePoint || 0x221A == codePoint || 0x221D <= codePoint && codePoint <= 0x2220 || 0x2223 == codePoint || 0x2225 == codePoint || 0x2227 <= codePoint && codePoint <= 0x222C || 0x222E == codePoint || 0x2234 <= codePoint && codePoint <= 0x2237 || 0x223C <= codePoint && codePoint <= 0x223D || 0x2248 == codePoint || 0x224C == codePoint || 0x2252 == codePoint || 0x2260 <= codePoint && codePoint <= 0x2261 || 0x2264 <= codePoint && codePoint <= 0x2267 || 0x226A <= codePoint && codePoint <= 0x226B || 0x226E <= codePoint && codePoint <= 0x226F || 0x2282 <= codePoint && codePoint <= 0x2283 || 0x2286 <= codePoint && codePoint <= 0x2287 || 0x2295 == codePoint || 0x2299 == codePoint || 0x22A5 == codePoint || 0x22BF == codePoint || 0x2312 == codePoint || 0x2460 <= codePoint && codePoint <= 0x24E9 || 0x24EB <= codePoint && codePoint <= 0x254B || 0x2550 <= codePoint && codePoint <= 0x2573 || 0x2580 <= codePoint && codePoint <= 0x258F || 0x2592 <= codePoint && codePoint <= 0x2595 || 0x25A0 <= codePoint && codePoint <= 0x25A1 || 0x25A3 <= codePoint && codePoint <= 0x25A9 || 0x25B2 <= codePoint && codePoint <= 0x25B3 || 0x25B6 <= codePoint && codePoint <= 0x25B7 || 0x25BC <= codePoint && codePoint <= 0x25BD || 0x25C0 <= codePoint && codePoint <= 0x25C1 || 0x25C6 <= codePoint && codePoint <= 0x25C8 || 0x25CB == codePoint || 0x25CE <= codePoint && codePoint <= 0x25D1 || 0x25E2 <= codePoint && codePoint <= 0x25E5 || 0x25EF == codePoint || 0x2605 <= codePoint && codePoint <= 0x2606 || 0x2609 == codePoint || 0x260E <= codePoint && codePoint <= 0x260F || 0x2614 <= codePoint && codePoint <= 0x2615 || 0x261C == codePoint || 0x261E == codePoint || 0x2640 == codePoint || 0x2642 == codePoint || 0x2660 <= codePoint && codePoint <= 0x2661 || 0x2663 <= codePoint && codePoint <= 0x2665 || 0x2667 <= codePoint && codePoint <= 0x266A || 0x266C <= codePoint && codePoint <= 0x266D || 0x266F == codePoint || 0x269E <= codePoint && codePoint <= 0x269F || 0x26BE <= codePoint && codePoint <= 0x26BF || 0x26C4 <= codePoint && codePoint <= 0x26CD || 0x26CF <= codePoint && codePoint <= 0x26E1 || 0x26E3 == codePoint || 0x26E8 <= codePoint && codePoint <= 0x26FF || 0x273D == codePoint || 0x2757 == codePoint || 0x2776 <= codePoint && codePoint <= 0x277F || 0x2B55 <= codePoint && codePoint <= 0x2B59 || 0x3248 <= codePoint && codePoint <= 0x324F || 0xE000 <= codePoint && codePoint <= 0xF8FF || 0xFE00 <= codePoint && codePoint <= 0xFE0F || 0xFFFD == codePoint || 0x1F100 <= codePoint && codePoint <= 0x1F10A || 0x1F110 <= codePoint && codePoint <= 0x1F12D || 0x1F130 <= codePoint && codePoint <= 0x1F169 || 0x1F170 <= codePoint && codePoint <= 0x1F19A || 0xE0100 <= codePoint && codePoint <= 0xE01EF || 0xF0000 <= codePoint && codePoint <= 0xFFFFD || 0x100000 <= codePoint && codePoint <= 0x10FFFD) {
        return 'A';
      }

      return 'N';
    };

    eaw.characterLength = function (character) {
      var code = this.eastAsianWidth(character);

      if (code == 'F' || code == 'W' || code == 'A') {
        return 2;
      } else {
        return 1;
      }
    }; // Split a string considering surrogate-pairs.


    function stringToArray(string) {
      return string.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
    }

    eaw.length = function (string) {
      var characters = stringToArray(string);
      var len = 0;

      for (var i = 0; i < characters.length; i++) {
        len = len + this.characterLength(characters[i]);
      }

      return len;
    };

    eaw.slice = function (text, start, end) {
      textLen = eaw.length(text);
      start = start ? start : 0;
      end = end ? end : 1;

      if (start < 0) {
        start = textLen + start;
      }

      if (end < 0) {
        end = textLen + end;
      }

      var result = '';
      var eawLen = 0;
      var chars = stringToArray(text);

      for (var i = 0; i < chars.length; i++) {
        var _char = chars[i];
        var charLen = eaw.length(_char);

        if (eawLen >= start - (charLen == 2 ? 1 : 0)) {
          if (eawLen + charLen <= end) {
            result += _char;
          } else {
            break;
          }
        }

        eawLen += charLen;
      }

      return result;
    };
  })(eastasianwidth);

  var eastAsianWidth = eastasianwidth.exports;

  var emojiRegex = function emojiRegex() {
    // https://mths.be/emoji
    return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
  };

  function stringWidth(string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof string !== 'string' || string.length === 0) {
      return 0;
    }

    options = _objectSpread2({
      ambiguousIsNarrow: true
    }, options);
    string = stripAnsi(string);

    if (string.length === 0) {
      return 0;
    }

    string = string.replace(emojiRegex(), '  ');
    var ambiguousCharacterWidth = options.ambiguousIsNarrow ? 1 : 2;
    var width = 0;

    var _iterator = _createForOfIteratorHelper(string),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var character = _step.value;
        var codePoint = character.codePointAt(0); // Ignore control characters

        if (codePoint <= 0x1F || codePoint >= 0x7F && codePoint <= 0x9F) {
          continue;
        } // Ignore combining characters


        if (codePoint >= 0x300 && codePoint <= 0x36F) {
          continue;
        }

        var code = eastAsianWidth.eastAsianWidth(character);

        switch (code) {
          case 'F':
          case 'W':
            width += 2;
            break;

          case 'A':
            width += ambiguousCharacterWidth;
            break;

          default:
            width += 1;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return width;
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

  exports.say = say;
  exports.think = think;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
