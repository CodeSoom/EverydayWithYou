import { fireEvent, render } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import SituationSelectStartBtnContainer from './SituationSelectStartBtnContainer';

jest.mock('react-redux');

describe('SituationSelectStartBtnContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      newRestaurants: [
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
    }));
  });

  const renderSituationSelectStartBtnContainer = () => render((
    <MemoryRouter>
      <SituationSelectStartBtnContainer />
    </MemoryRouter>
  ));

  context('when clicks "시작" button', () => {
    const newRestaurants = [
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

    it('calls dispatch with action: setSituationRestaurants', () => {
      const { getByText } = renderSituationSelectStartBtnContainer();

      fireEvent.click(getByText('시작'));

      expect(dispatch).toBeCalledWith({
        type: 'setSituationRestaurants',
        payload: { newRestaurants },
      });
    });
  });

  context('when clicks "건너뛰기" button', () => {
    it('calls nothing', () => {
      const { getByText } = renderSituationSelectStartBtnContainer();

      fireEvent.click(getByText('건너뛰기'));

      expect(dispatch).not.toBeCalled();
    });
  });
});
