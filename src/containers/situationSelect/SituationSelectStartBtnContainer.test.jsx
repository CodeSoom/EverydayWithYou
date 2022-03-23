import { fireEvent, render } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import SituationSelectStartBtnContainer from './SituationSelectStartBtnContainer';

jest.mock('react-redux');

describe('SituationSelectStartBtnContainer', () => {
  const original = window.location;

  const reloadFn = () => {
    window.location.reload(true);
  };

  const sortedNumber = 1;

  const dispatch = jest.fn();

  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: jest.fn() },
    });

    jest.spyOn(window, 'alert').mockImplementation(() => { }); // ToDo 이게 맞나?

    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => (
      selector.situationRestaurantsData = [
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
      ]
    ));
  });

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: jest.fn() },
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', { configurable: true, value: original });
  });

  it('mocks reload function', () => {
    expect(jest.isMockFunction(window.location.reload)).toBe(true);
  });

  it('calls reload function', () => {
    reloadFn();
    expect(window.location.reload).toHaveBeenCalled();
  });

  const renderSituationSelectStartBtnContainer = () => render((
    <MemoryRouter>
      <SituationSelectStartBtnContainer
        sortedNumber={sortedNumber}
      />
    </MemoryRouter>
  ));

  context('when clicks "시작" button', () => {
    it('calls dispatch when get sortNumber with action: setSituationRestaurants to set restaurantsData', () => {
      const situationRestaurantsData = [
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

      const { getByText } = renderSituationSelectStartBtnContainer();

      fireEvent.click(getByText('시작'));

      expect(dispatch).toBeCalledWith({
        type: 'setSituationRestaurants',
        payload: { situationRestaurantsData },
      });
    });
  });

  context('when clicks "건너뛰기" button', () => {
    const situationRestaurantsData = [];

    it('calls dispatch with action: setSituationRestaurants to set restaurantsData', () => {
      const { getByText } = renderSituationSelectStartBtnContainer();

      fireEvent.click(getByText('건너뛰기'));

      expect(dispatch).toBeCalledWith({
        type: 'setSituationRestaurants',
        payload: { situationRestaurantsData },
      });
    });
  });
});
