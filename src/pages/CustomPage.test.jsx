import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import {
  filter,
} from '../../__mocks__/method';

import CustomPage from './CustomPage';

jest.mock('react-redux');

describe('CustomPage', () => {
  const restaurants = [
    {
      "id": "10",
      "name": "더다이닝랩",
      "situation": "소개팅",
      "age": "20대",
      "place": "마포구/홍대",
      "category": "양식",
      "priceRange": "3만원 이하",
      "mood": null,
      "after_course": null,
    },
    {
      "id": "36",
      "name": "보이어",
      "situation": "데이트",
      "age": "20대",
      "place": "왕십리/성동",
      "category": "양식",
      "priceRange": "3만원 이하",
      "mood": "고급스러운",
      "after_course": null,
    },
  ];

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => (
      selector.situationRestaurantsData = [
        {
          "id": "10",
          "name": "더다이닝랩",
          "situation": "소개팅",
          "age": "20대",
          "place": "마포구/홍대",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": null,
          "after_course": null,
        },
      ]));
  });

  const renderCustomPage = () => render((
    <MemoryRouter>
      <CustomPage restaurants={restaurants} />
    </MemoryRouter>
  ));

  it('renders restaurants if length of newRestuarants is null', () => {
    renderCustomPage();

    const situationRestaurantsData = [];

    const result = filter(restaurants, situationRestaurantsData);

    expect(result).toHaveLength(2);
  });

  it('renders situationRestaurantsData if length of newRestuarants is not null', () => {
    renderCustomPage();

    const situationRestaurantsData = [
      {
        "id": "10",
        "name": "더다이닝랩",
        "situation": "소개팅",
        "age": "20대",
        "place": "마포구/홍대",
        "category": "양식",
        "priceRange": "3만원 이하",
        "mood": null,
        "after_course": null,
      },
    ];

    const result = filter(restaurants, situationRestaurantsData);

    expect(result).toHaveLength(1);
  });
});
