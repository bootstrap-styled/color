import Color from 'color';
import ColorWrapper, { ColorMock } from '../index';

describe('ColorWrapper', () => {
  it('should be the ColorMock class', () => {
    const color = ColorWrapper('linear-gradient(#FFF, #000)');
    expect(color instanceof ColorMock).toBe(true);
  });
  it('should be the same color', () => {
    const color = ColorWrapper('linear-gradient(#FFF, #000)');
    expect(color.darken().toString()).toEqual('linear-gradient(#FFF, #000)');
  });
  it('should use toString and have equal value', () => {
    const color = ColorWrapper('linear-gradient(#FFF, #000)');
    expect(color.darken().toString()).toEqual(color.toString());
  });
  it('should use toString after N pipe and have equal value', () => {
    const color = ColorWrapper('linear-gradient(#FFF, #000)');
    expect(color.darken().rgb().lighten().toString()).toEqual(color.toString());
  });
  it('should use the real Color', () => {
    const color = ColorWrapper('#f00');
    const color2 = Color('#f00');
    expect(color.darken(0.5).toString()).toEqual(color2.darken(0.5).toString());
  });
  it('should use the real Color', () => {
    const color = ColorWrapper('#f00');
    const color2 = Color('#f00');
    expect(color.darken(0.5).toString()).toEqual(color2.darken(0.5).toString());
  });
});
