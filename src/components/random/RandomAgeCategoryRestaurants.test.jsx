import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import RandomAgeCategoryRestaurants from './RandomAgeCategoryRestaurants';

jest.mock('react-redux');

describe('RandomAgeCategoryRestaurants', () => {
  const mock = jest.fn();
  const dispatch = jest.fn();

  beforeEach(() => {
    mock.mockClear();
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => (
      selector.RandomAgeCategoryRestaurants = [
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

  const renderRandomAgeCategoryRestaurants = () => render((
    <MemoryRouter>
      <RandomAgeCategoryRestaurants />
    </MemoryRouter>
  ));

  describe('map', () => {
    const randomAgeCategoryRestaurants = [
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
      randomAgeCategoryRestaurants.map(restaurant => mock(restaurant))
      expect(mock).toBeCalled();
    });
  });
});
