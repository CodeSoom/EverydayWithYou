import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomePage from './HomePage';

jest.mock('react-redux');

describe('HomePage', () => {
  const mock = jest.fn();
  const dispatch = jest.fn();

  beforeEach(() => {
    mock.mockClear();
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => (
      selector.randomSituationPlaceRestaurants = [
        {
          "id": "10",
          "img": "https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/restaurants-img/%E1%84%83%E1%85%A5%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%82%E1%85%B5%E1%86%BC%E1%84%85%E1%85%A2%E1%86%B8.jpeg",
          "name": "더다이닝랩",
          "situation": "소개팅",
          "age": "20대",
          "place": "마포구/홍대",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "분위기좋은",
          "after_course": "연남그곳",
        },
      ],
      selector.situation = '소개팅',
      selector.place = '마포구/홍대'
    ));
  });

  const renderHomePage = () => render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  it('renders text', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('고객님이 좋아할 음식점 추천');
  });

  describe('map', () => {
    const randomSituationPlaceRestaurants = [
      {
        "id": "10",
        "img": "https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/restaurants-img/%E1%84%83%E1%85%A5%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%82%E1%85%B5%E1%86%BC%E1%84%85%E1%85%A2%E1%86%B8.jpeg",
        "name": "더다이닝랩",
        "situation": "소개팅",
        "age": "20대",
        "place": "마포구/홍대",
        "category": "양식",
        "priceRange": "3만원 이하",
        "mood": "분위기좋은",
        "after_course": "연남그곳",
      },
    ];

    it('calls its argument with a non-null argument', () => {
      const { container } = renderHomePage();

      expect(container).toHaveTextContent('선호도를 반영한 취향 저격 음식점 😉');

      randomSituationPlaceRestaurants.map(restaurant => mock(restaurant))
      expect(mock).toBeCalled();
    });
  });
});
