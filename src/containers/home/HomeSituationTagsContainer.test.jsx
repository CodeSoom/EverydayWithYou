import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomeSituationTagsContainer from './HomeSituationTagsContainer';

jest.mock('react-redux');

describe('HomeSituationTagsContainer', () => {
  const restaurantsData = [
    { id: 1, name: '청와옥', situation: '과음한 다음 날' },
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedSituation:
        { id: 1, name: '청와옥', situation: '과음한 다음 날', color: 'select' },
    }));
  });

  const renderHomeSituationTagsContainer = () => render((
    <MemoryRouter>
      <HomeSituationTagsContainer
        restaurantsData={restaurantsData}
      />
    </MemoryRouter>
  ));

  context('render home page', () => {
    it('calls dispatch with action : setRestaurants', () => {
      const { container } = renderHomeSituationTagsContainer();

      expect(container).toHaveTextContent('#과음한 다음 날');

      expect(dispatch).toBeCalledWith({
        type: 'setRestaurants',
        payload: { restaurantsData },
      })
    });
  });

  context('when click "#과음한 다음 날" tag', () => {
    const selectedTag = '과음한 다음 날';

    it('calls dispatch with action : sortRestaurantsBySituation', () => {
      const { getByText } = renderHomeSituationTagsContainer();

      fireEvent.click(getByText('#과음한 다음 날'));

      expect(dispatch).toBeCalledWith({
        type: 'sortRestaurantsBySituation',
        payload: { selectedTag },
      })
    });
  });

  context('when click situation tag', () => {
    const selectedId = 1;

    it('calls dispatch with action : selectSituationTag', () => {
      const { getByText } = renderHomeSituationTagsContainer();

      expect(getByText('#과음한 다음 날')).toBeInTheDocument();

      fireEvent.click(getByText('#과음한 다음 날'))

      expect(dispatch).toBeCalledWith({
        type: 'selectSituationTag',
        payload: { selectedId },
      });
    });
  });
});
