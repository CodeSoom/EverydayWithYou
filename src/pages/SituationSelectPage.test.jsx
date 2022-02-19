// 관심사: 화면 구성과 스토어에서 기존 레스토랑 정보 스토어에 저장
import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import SituationSelectPage from './SituationSelectPage';

jest.mock('react-redux');

describe('SituationSelectPage', () => {
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
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: [
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
      ],
    }))
  });

  const renderSituationSelectPage = () => render((
    <MemoryRouter>
      <SituationSelectPage
        restaurants={restaurants} />
    </MemoryRouter>
  ));

  describe('rendering situation select page', () => {
    it('calls dispatch with action : setRestaurants', () => {
      const { container } = renderSituationSelectPage();

      expect(container).toHaveTextContent('코스를 알려드리는 여정이 시작됩니다 !');

      expect(dispatch).toBeCalledWith({
        type: 'setRestaurants',
        payload: { restaurants },
      })
    });
  });
});
