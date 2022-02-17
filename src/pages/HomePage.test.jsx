import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomePage from './HomePage';

jest.mock('react-redux');

describe('HomePage', () => {
  const restaurants = [
    {
      "name": "청와옥",
      "id": "10",
      "situation": "과음한 다음 날",
      "place": "서울 송파구",
      "category": "순대국밥",
    },
    {
      "name": "별미곱창",
      "id": "11",
      "situation": "회식",
      "place": "서울 송파구",
      "category": "곱창, 막창",
    },
    {
      "name": "뱃놈",
      "id": "12",
      "situation": "친구들이랑",
      "place": "서울 광진구",
      "category": "조개",
    },
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedSituation:
        { id: 1, name: '청와옥', situation: '과음한 다음 날', color: 'select' },
      selectedPlace:
        { id: 1, name: '청와옥', place: '서울 송파구', color: 'select' },
      selectedCategory:
        { id: 1, name: '청와옥', category: '순대국밥', color: 'select' },
    }));
  });

  const renderHomePage = () => render((
    <MemoryRouter>
      <HomePage restaurantsData={restaurants} />
    </MemoryRouter>
  ));

  it('renders "맛집 추천하기" text with link to "/post"', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('맛집 추천하기');
  });
});
