import { render } from '@testing-library/react';

import KakaoMapBtn from './KakaoMapBtn';

describe('KakaoMapBtn', () => {
  const placeUrl = `https://place.map.kakao.com/1617813108`;

  let windowSpy;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, "window", "get");
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  render((
    <KakaoMapBtn
      placeUrl={placeUrl}
    />
  ));

  it('returns "https://place.map.kakao.com/1617813108"', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        assign: placeUrl,
      },
    }));

    expect(window.location.assign).toEqual(placeUrl);
  });

  it('returns undefined after loading url', () => {
    windowSpy.mockImplementation(() => undefined);

    expect(window).toBeUndefined();
  });
});
