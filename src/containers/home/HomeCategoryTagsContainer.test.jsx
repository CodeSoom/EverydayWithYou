import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomeCategoryTagsContainer from './HomeCategoryTagsContainer';

jest.mock('react-redux');

describe('HomeCategoryTagsContainer', () => {
  const restaurantsData = [
    { id: 1, name: '청와옥', category: '순대국밥' },
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedCategory:
      { id: 1, name: '청와옥', category: '순대국밥', color: 'blue' },
    }));
  });

  const renderHomeCategoryTagsContainer = () => render((
    <MemoryRouter>
      <HomeCategoryTagsContainer
        restaurantsData={restaurantsData}
      />
    </MemoryRouter>
  ));

  context('render home page', () => {
    it('calls dispatch with action : setRestaurants', () => {
      const { container } = renderHomeCategoryTagsContainer();

      expect(container).toHaveTextContent('#순대국밥');

      expect(dispatch).toBeCalledWith({
        type: 'setRestaurants',
        payload: { restaurantsData },
      })
    });
  });

  context('when click "#순대국밥" tag', () => {
    const selectedTag = '순대국밥';

    it('calls dispatch with action : sortRestaurantsByCategory', () => {
      const { getByText } = renderHomeCategoryTagsContainer();

      fireEvent.click(getByText('#순대국밥'));

      expect(dispatch).toBeCalledWith({
        type: 'sortRestaurantsByCategory',
        payload: { selectedTag },
      })
    });
  });

  context('when click "#순대국밥" tag', () => {
    const selectedId = 1;

    it('calls dispatch with action : selectCategoryTag', () => {
      const { getByText } = renderHomeCategoryTagsContainer();

      expect(getByText('#순대국밥')).toBeInTheDocument();

      fireEvent.click(getByText('#순대국밥'))

      expect(dispatch).toBeCalledWith({
        type: 'selectCategoryTag',
        payload: { selectedId },
      });
    });
  });
});
