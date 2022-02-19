// 관심사: 화면 구성과 스토어에서 레스토랑 컨테이너에 뿌려주기
import { render } from '@testing-library/react';

import { useSelector, useDispatch, filter } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import CustomPage from './CustomPage';

jest.mock('react-redux');

describe('CustomPage', () => {
  const restaurants = [
    {
      "id": "10",
      "name": "더다이닝랩",
      "situation": "소개팅",
      "age": "20대",
      "place": "홍대/합정",
      "category": "양식",
      "priceRange": "3만원 이하",
      "mood": "none",
      "2nd-course": "none",
    },
    {
      "id": "36",
      "name": "보이어",
      "situation": "데이트",
      "age": "20대",
      "place": "성수",
      "category": "양식",
      "priceRange": "3만원 이하",
      "mood": "고급스러운",
      "2nd-course": "none",
    },
  ];

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector(
      [
        {
          "id": "10",
          "name": "더다이닝랩",
          "situation": "소개팅",
          "age": "20대",
          "place": "홍대/합정",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "none",
          "2nd-course": "none",
        },
      ]));
  });

  const renderCustomPage = () => render((
    <MemoryRouter>
      <CustomPage restaurants={restaurants} />
    </MemoryRouter>
  ));

  it('if length of newRestuarants is null', () => {
    const situationRestaurantsData = [];

    const result = filter(restaurants, situationRestaurantsData);

    expect(result).toHaveLength(2);
  });

  it('if length of newRestuarants is not null', () => {
    const situationRestaurantsData = [
      {
        "id": "10",
        "name": "더다이닝랩",
        "situation": "소개팅",
        "age": "20대",
        "place": "홍대/합정",
        "category": "양식",
        "priceRange": "3만원 이하",
        "mood": "none",
        "2nd-course": "none",
      },
    ];

    const result = filter(restaurants, situationRestaurantsData);

    expect(result).toHaveLength(1);
  });
});
