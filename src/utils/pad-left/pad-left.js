/** @flow */
import isString from '../is-string';

const cache = [
    '',
    ' ',
    '  ',
    '   ',
    '    ',
    '     ',
    '      ',
    '       ',
    '        ',
    '         '
  ];
  
  export default function leftPad(str: string, len: number, ch: string): string {
    if (!isString(str)) throw new Error('`str` must be a cool string');
    
    str = str + '';
    len = len - str.length;
    if (len <= 0) return str;
    if (!ch && ch !== 0) ch = ' ';
    ch = ch + '';
    if (ch === ' ' && len < 10) return cache[len] + str;
    let pad = '';
  
    while (true) {
      if (len & 1) pad += ch;
      len >>= 1;
      if (len) ch += ch;
      else break;
    }
  
    return pad + str;
  };

  