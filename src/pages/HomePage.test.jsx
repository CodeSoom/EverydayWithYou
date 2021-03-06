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
      selector.place = '마포구/홍대',
      selector.randomAgeCategoryRestaurants = [
        {
          "id": "17",
          "img": "https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/restaurants-img/%E1%84%92%E1%85%A1%E1%86%AF%E1%84%86%E1%85%A5%E1%84%82%E1%85%B5%E1%84%91%E1%85%A9%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A1%E1%84%8E%E1%85%A1%E1%84%86%E1%85%A7%E1%86%AF%E1%84%8E%E1%85%B5%E1%84%80%E1%85%AE%E1%86%A8%E1%84%89%E1%85%AE.jpeg",
          "name": "할머니포장마차멸치국수",
          "situation": "데이트",
          "age": "20대",
          "place": "송파구",
          "category": "주점",
          "priceRange": "3만원 이하",
          "mood": "캐주얼한",
          "after_course": "가일",
        },
      ],
      selector.age = '20대',
      selector.category = '주점'
    ));
  });

  const renderHomePage = () => render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

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

    const randomAgeCategoryRestaurants = [
      {
        "id": "17",
        "img": "https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/restaurants-img/%E1%84%92%E1%85%A1%E1%86%AF%E1%84%86%E1%85%A5%E1%84%82%E1%85%B5%E1%84%91%E1%85%A9%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A1%E1%84%8E%E1%85%A1%E1%84%86%E1%85%A7%E1%86%AF%E1%84%8E%E1%85%B5%E1%84%80%E1%85%AE%E1%86%A8%E1%84%89%E1%85%AE.jpeg",
        "name": "할머니포장마차멸치국수",
        "situation": "데이트",
        "age": "20대",
        "place": "송파구",
        "category": "주점",
        "priceRange": "3만원 이하",
        "mood": "캐주얼한",
        "after_course": "가일",
      },
    ];

    it('calls its argument with a non-null argument', () => {
      randomAgeCategoryRestaurants.map(restaurant => mock(restaurant))
      expect(mock).toBeCalled();

      randomSituationPlaceRestaurants.map(restaurant => mock(restaurant))
      expect(mock).toBeCalled();
    });
  });
});
