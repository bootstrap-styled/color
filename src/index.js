import Color from 'color';

/**
 * @public
 * @name ColorMock
 * @description it is a mock of color, except methods does only return the unmanipulated string
 * @return {ColorMock}
 */
export class ColorMock {
  constructor(color) {
    this.color = color;
  }
  hsl() {
    return this;
  }
  isLight() {
    return false;
  }
  isDark() {
    return false;
  }
  negate() {
    return this;
  }
  lighten() {
    return this;
  }
  darken() {
    return this;
  }
  saturate() {
    return this;
  }
  desaturate() {
    return this;
  }
  grayscale() {
    return this;
  }
  whiten() {
    return this;
  }
  blacken() {
    return this;
  }
  fade() {
    return this;
  }
  opaquer() {
    return this;
  }
  rotate() {
    return this;
  }
  contrast() {
    return 10;
  }
  luminosity() {
    return 0.5;
  }
  mix() {
    return this;
  }
  blue() {
    return this.color;
  }
  green() {
    return this.color;
  }
  red() {
    return this.color;
  }
  hex() {
    return this.color;
  }
  rgbNumber() {
    return this.color;
  }
  rgb() {
    return this.color;
  }
  toString() {
    return this.color;
  }
}

/**
 * @public
 * @name ColorWrapper
 * @description it will prevent Color to fail on error if the value cannot be manipulated
 * @param color {String|Number}
 * @returns {Color|ColorMock}
 * @example
 * import Color from '$PACKAGE_NAME';
 * const color = Color('linear-gradient(#fff, #000)');
 * // color = 'linear-gradient(#fff, #000)'
 * color.darken(0.5);
 * // The value is never changed as it is not valid for Color
 * // color = 'linear-gradient(#fff, #000)'
 * color.darken(0.5).darken(0.2);
 * // The value is never changed as it is not valid for Color
 * // color = 'linear-gradient(#fff, #000)'
 *
 * const realColor = Color('#fff').darken(0.5);
 * // The value is valid for Color so it just use it
 * // realColor = 'hsl(0, 100%, 30%)'
 * @constructor
 */
export default function ColorWrapper(color) {
  if (typeof color === 'string' && color.indexOf('linear-gradient') === -1) {
    return Color(color);
  }
  return new ColorMock(color);
}
