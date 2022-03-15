import { render } from '@testing-library/react';

import uniqBy from 'lodash.uniqby';

import { useSelector } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import CustomRestaurantsContainer from './CustomRestaurantsContainer';

describe('CustomRestaurantsContainer', () => {
  const mock = jest.fn();
  // const dispatch = jest.fn();

  beforeEach(() => {
    mock.mockClear();
    /* dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch); */

    useSelector.mockImplementation((selector) => (
      selector.filteredRestaurantsData = [
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
      ],
      selector.alert = ''
    ));
  });

  const renderCustomRestaurantsContainer = () => render((
    <MemoryRouter>
      <CustomRestaurantsContainer
      />
    </MemoryRouter>
  ));

  describe('map', () => {
    const filteredRestaurantsData = [
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
    const uniqRestaurants = uniqBy(filteredRestaurantsData, 'name');


    it('calls its argument with a non-null argument', () => {
      const { container } = renderCustomRestaurantsContainer();

      expect(container).toHaveTextContent('고객님이 좋아할 음식점 추천');

      uniqRestaurants.map(restaurant => mock(restaurant))
      expect(mock).toBeCalledWith(
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
      );
    });
  });
});
