const faviator = require('../index');
const createSvgFavicon = require('@faviator/create-svg-favicon');
const svgToImgMock = require('@ycm.jason/svg-to-img');

jest.mock('@ycm.jason/svg-to-img');

describe('faviator [index.js]', () => {
  it('should call .svg', async () => {
    jest.spyOn(faviator, 'svg').mockResolvedValue('hello');
    const v = await faviator();
    expect(v).toEqual('hello');
  });

  describe('.svg', () => {
    it('should wrap createSvgFavicon() in a Promise', async () => {
      const svg = await faviator.svg();
      expect(svg.toString()).toBe(createSvgFavicon());
    });
  });

  describe('.jpg', () => {

    it('should have alias .jpeg', () => {
      expect(faviator.jpeg).toBe(faviator.jpg);
    });

    it('should call svgToImg.jpeg', async () => {
      const expectJpg = 'some-jpeg';
      svgToImgMock.jpeg.mockResolvedValue(expectJpg);
      const jpg = await faviator.jpg();
      expect(jpg).toBe(expectJpg);
    });

  });

  describe('.png', () => {
    it('should call svgToImg.jpeg', async () => {
      const expectPng = 'some-png';
      svgToImgMock.png.mockResolvedValue(expectPng);
      const png = await faviator.png();
      expect(png).toEqual(expectPng);
    });
  });

  describe('.faviatorIconConfig', () => {
    it('should not be undefined', () => {
      expect(faviator.faviatorIconConfig).toBeDefined();
      expect(typeof faviator.faviatorIconConfig).toBe('object');
      expect(faviator.faviatorIconConfig).not.toBeNull();
    });
  });
});
