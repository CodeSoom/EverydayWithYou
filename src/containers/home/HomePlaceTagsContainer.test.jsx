import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomePlaceTagsContainer from './HomePlaceTagsContainer';

jest.mock('react-redux');

describe('HomePlaceTagsContainer', () => {
  const restaurantsData = [
    { id: 1, name: '청와옥', place: '서울 송파구' },
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedPlace:
      { id: 1, name: '청와옥', place: '서울 송파구', color: 'blue' },
    }));
  });

  const renderHomePlaceTagsContainer = () => render((
    <MemoryRouter>
      <HomePlaceTagsContainer
        restaurantsData={restaurantsData}
      />
    </MemoryRouter>
  ));

  context('render home page', () => {
    it('calls dispatch with action : setRestaurants', () => {
      const { container } = renderHomePlaceTagsContainer();

      expect(container).toHaveTextContent('#서울 송파구');

      expect(dispatch).toBeCalledWith({
        type: 'setRestaurants',
        payload: { restaurantsData },
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
