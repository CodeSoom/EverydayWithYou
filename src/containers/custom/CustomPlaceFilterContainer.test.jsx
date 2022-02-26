import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import uniqBy from 'lodash.uniqby';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import CustomPlaceFilterContainer from './CustomPlaceFilterContainer';

jest.mock('react-redux');

describe('CustomPlaceFilterContainer', () => {
  const mock = jest.fn();
  const dispatch = jest.fn();

  beforeEach(() => {
    mock.mockClear();
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => (
      selector.placeColor = 'selector',
      selector.selectedPlace = [
        {
          "id": "21",
          "name": "갈리나데이지",
          "situation": "썸",
          "age": "20대",
          "place": "종로구",
          "category": "이탈리안",
          "priceRange": "3만원 이하",
          "mood": "고급스러운",
          "2nd-course": null,
        },
        {
          "id": "17",
          "name": "고가빈커리하우스",
          "situation": "소개팅",
          "age": "30대",
          "place": "종로구",
          "category": "인도음식",
          "priceRange": "3만원 이하",
          "mood": "캐주얼한",
          "2nd-course": null,
        },
      ],
      selector.restaurantsData = [
        {
          "id": "10",
          "name": "더다이닝랩",
          "situation": "소개팅",
          "age": "20대",
          "place": "마포구/홍대/합정",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": null,
          "2nd-course": null,
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
          "2nd-course": null,
        },
        {
          "id": "21",
          "name": "갈리나데이지",
          "situation": "썸",
          "age": "20대",
          "place": "종로구",
          "category": "이탈리안",
          "priceRange": "3만원 이하",
          "mood": "고급스러운",
          "2nd-course": null,
        },
        {
          "id": "17",
          "name": "고가빈커리하우스",
          "situation": "소개팅",
          "age": "30대",
          "place": "종로구",
          "category": "인도음식",
          "priceRange": "3만원 이하",
          "mood": "캐주얼한",
          "2nd-course": null,
        },
      ]
    ));
  });

  const renderCustomFilterContainer = () => render((
    <MemoryRouter>
      <CustomPlaceFilterContainer />
    </MemoryRouter>
  ));

  describe('map', () => {
    const restaurantsData = [
      {
        "id": "10",
        "name": "더다이닝랩",
        "situation": "소개팅",
        "age": "20대",
        "place": "마포구/홍대/합정",
        "category": "양식",
        "priceRange": "3만원 이하",
        "mood": null,
        "2nd-course": null,
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
        "2nd-course": null,
      },
      {
        "id": "21",
        "name": "갈리나데이지",
        "situation": "썸",
        "age": "20대",
        "place": "종로구",
        "category": "이탈리안",
        "priceRange": "3만원 이하",
        "mood": "고급스러운",
        "2nd-course": null,
      },
      {
        "id": "17",
        "name": "고가빈커리하우스",
        "situation": "소개팅",
        "age": "30대",
        "place": "종로구",
        "category": "인도음식",
        "priceRange": "3만원 이하",
        "mood": "캐주얼한",
        "2nd-course": null,
      },
    ]

    const uniqPlaces = uniqBy(restaurantsData, 'place');
    it('calls its argument with a non-null argument', () => {
      const { container } = renderCustomFilterContainer();

      expect(container).toHaveTextContent('어디로 가고 싶나요?');

      uniqPlaces.map(place => mock(place))
      expect(mock).toBeCalled();
    });
  });

  context('when click "종로구" tag', () => {
    it('calls dispatch with action : setPlaceFilter', () => {
      const { getByText } = renderCustomFilterContainer();

      expect(getByText('종로구')).toBeInTheDocument();

      fireEvent.click(getByText('종로구'))

      expect(dispatch).toBeCalled();
    });
  });
});
