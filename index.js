'use strict';

var assign  = require('object-assign');
var presets = require('./presets.json');


exports.presets = presets;

exports.getBorderChars = function (borderStyle, borderChars) {

  var chars  = null;
  var preset = null;

  if (borderStyle && isString(borderStyle)) {

    if (isString(borderStyle)) {
      preset = presets[borderStyle];
    }

    if (!preset) {
      throw new TypeError('Invalid `borderStyle`: ' + borderStyle);
    }
  }

  if (borderChars && !isObject(borderChars)) {
    throw new TypeError('Invalid `borderChars`: ' + borderChars);
  }

  if (!preset && !borderChars) {
    throw new TypeError('`borderStyle` or `borderChars` is required');
  }

  if (preset) {
    chars = assign({}, preset, borderChars);
  } else {
    chars = borderChars;
  }


  [
    'topLeft',
    'topRight',
    'bottomRight',
    'bottomLeft'
  ].forEach(function (key) {
    if (!chars[key] || !isString(chars[key])) {
      throw new TypeError('Invalid `' + key + '` borderChar: ' + chars[key]);
    }
  });


  [
    'top',
    'right',
    'bottom',
    'left',
    'vertical',
    'horizontal'].forEach(function (key) {
    if (chars[key] && !isString(chars[key])) {
      throw new TypeError('Invalid `' + key + '` borderChar: ' + chars[key]);
    }
  });

  var hasVertical   = chars.vertical && isString(chars.vertical);
  var hasHorizontal = chars.horizontal && isString(chars.horizontal);
  var hasTop        = chars.top && isString(chars.top);
  var hasBottom     = chars.bottom && isString(chars.bottom);
  var hasLeft       = chars.left && isString(chars.left);
  var hasRight      = chars.right && isString(chars.right);

  if (!hasTop && !hasHorizontal) {
    throw new TypeError('`horizontal` or `top` borderChar is required');
  }

  if (!hasBottom && !hasHorizontal) {
    throw new TypeError('`horizontal` or `bottom` borderChar is required');
  }

  if (!hasLeft && !hasVertical) {
    throw new TypeError('`vertical` or `left` borderChar is required');
  }

  if (!hasRight && !hasVertical) {
    throw new TypeError('`vertical` or `right` borderChar is required');
  }


  return chars;
};


// helpers
// -------

function isString(val) {
  return typeof val === 'string';
}

function isObject(val) {
  return typeof val === 'object';
}
