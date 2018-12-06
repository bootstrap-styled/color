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
  hsl = () => this
  isLight = () => false
  isDark = () => false
  negate = () => this
  lighten = () => this
  darken = () => this
  alpha = () => this
  saturate = () => this
  desaturate = () => this
  grayscale = () => this
  whiten = () => this
  blacken = () => this
  fade = () => this
  opaquer = () => this
  rotate = () => this
  contrast = () => 10
  luminosity = () => 0.5
  mix = () => this
  blue = () => this.toString()
  green = () => this.toString()
  red = () => this.toString()
  hex = () => this.toString()
  rgbNumber = () => this.toString()
  rgb = () => this.toString()
  toString = () => this.color
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
  if (typeof color === 'string' && color.includes('linear-gradient')) {
    return new ColorMock(color);
  }
  return Color(color);
}
