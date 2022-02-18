import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import CustomPlaceContainer from './CustomPlaceContainer';

jest.mock('react-redux');

describe('CustomPlaceContainer', () => {
  const restaurants = [
    { id: 1, name: '청와옥', place: '서울 송파구' },
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedPlace:
        { id: 1, name: '청와옥', place: '서울 송파구', color: 'select' },
    }));
  });

  const renderHomePlaceTagsContainer = () => render((
    <MemoryRouter>
      <CustomPlaceContainer
        restaurants={restaurants}
      />
    </MemoryRouter>
  ));

  context('render home page', () => {
    it('calls dispatch with action : setRestaurants', () => {
      const { container } = renderHomePlaceTagsContainer();

      expect(container).toHaveTextContent('#서울 송파구');

      expect(dispatch).toBeCalledWith({
        type: 'setRestaurants',
        payload: { restaurants },
      })
    });
  });

  context('when click "#서울 송파구" tag', () => {
    it('calls dispatch with action : sortRestaurantsByPlace', () => {
      const selectedTag = '서울 송파구';

      const { getByText } = renderHomePlaceTagsContainer();

      fireEvent.click(getByText('#서울 송파구'));

      expect(dispatch).toBeCalledWith({
        type: 'sortRestaurantsByPlace',
        payload: { selectedTag },
      })
    });

    it('calls dispatch with action : selectPlaceTag', () => {
      const selectedId = 1;

      const { getByText } = renderHomePlaceTagsContainer();

      fireEvent.click(getByText('#서울 송파구'));

      expect(dispatch).toBeCalledWith({
        type: 'selectPlaceTag',
        payload: { selectedId },
      })
    });
  });
});
