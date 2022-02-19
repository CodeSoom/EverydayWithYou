import { fireEvent, render } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import SituationSelectStartBtnContainer from './SituationSelectStartBtnContainer';

jest.mock('react-redux');

describe('SituationSelectStartBtnContainer', () => {
  const sortNumber = 1;

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => (
      selector.situationRestaurantsData = [
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
      selector.restaurants = [
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
    ));
  });

  const renderSituationSelectStartBtnContainer = () => render((
    <MemoryRouter>
      <SituationSelectStartBtnContainer
        sortNumber={sortNumber}
      />
    </MemoryRouter>
  ));

  context('when clicks "시작" button', () => {
    it('calls dispatch when get sortNumber with action: setSituationRestaurants to set restaurantsData', () => {
      const restaurantsData = [
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

      const { getByText } = renderSituationSelectStartBtnContainer();

      fireEvent.click(getByText('시작'));

      expect(dispatch).toBeCalledWith({
        type: 'setSituationRestaurants',
        payload: { restaurantsData },
      });
    });
  });

  context('when clicks "건너뛰기" button', () => {
    const restaurantsData = [
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

    it('calls dispatch with action: setSituationRestaurants to set restaurantsData', () => {
      const { getByText } = renderSituationSelectStartBtnContainer();

      fireEvent.click(getByText('건너뛰기'));

      expect(dispatch).toBeCalledWith({
        type: 'setSituationRestaurants',
        payload: { restaurantsData },
      });
    });
  });
});
