import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import uniqBy from 'lodash.uniqby';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import CustomCategoryFilterContainer from './CustomCategoryFilterContainer';

jest.mock('react-redux');

describe('CustomCategoryFilterContainer', () => {
  const mock = jest.fn();
  const dispatch = jest.fn();

  beforeEach(() => {
    mock.mockClear();
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => (
      selector.categoryColor = 'selector',
      selector.selectedCategory = [
        {
          "id": "10",
          "name": "더다이닝랩",
          "situation": "소개팅",
          "age": "20대",
          "place": "마포구/홍대/합정",
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
        {
          "id": "21",
          "name": "갈리나데이지",
          "situation": "썸",
          "age": "20대",
          "place": "종로구",
          "category": "이탈리안",
          "priceRange": "3만원 이하",
          "mood": "고급스러운",
          "2nd-course": "none",
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
          "2nd-course": "none",
        },
      ]
    ));
  });

  const renderCustomFilterContainer = () => render((
    <MemoryRouter>
      <CustomCategoryFilterContainer />
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
      {
        "id": "21",
        "name": "갈리나데이지",
        "situation": "썸",
        "age": "20대",
        "place": "종로구",
        "category": "이탈리안",
        "priceRange": "3만원 이하",
        "mood": "고급스러운",
        "2nd-course": "none",
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
        "2nd-course": "none",
      },
    ]

    const uniqCategories = uniqBy(restaurantsData, 'category');

    it('calls its argument with a non-null argument', () => {
      const { container } = renderCustomFilterContainer();

      expect(container).toHaveTextContent('무엇을 드시고 싶으세요?');

      uniqCategories.map(category => mock(category))
      expect(mock).toBeCalled();
    });
  });

  context('when click "#양식" tag', () => {
    it('calls dispatch with action : setCategoryFilter', () => {
      const { getByText } = renderCustomFilterContainer();

      expect(getByText('#양식')).toBeInTheDocument();

      fireEvent.click(getByText('#양식'));

      expect(dispatch).toBeCalled();
    });
  });
});
