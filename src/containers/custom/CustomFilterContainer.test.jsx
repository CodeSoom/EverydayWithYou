import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import CustomFilterContainer from './CustomFilterContainer';

jest.mock('react-redux');

describe('CustomFilterContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedCategory:
        { id: 1, name: '청와옥', category: '순대국밥', color: 'select' },
      selectedPlace:
        { id: 1, name: '청와옥', place: '서울 송파구', color: 'select' },
    }));
  });

  const renderHomeCategoryTagsContainer = () => render((
    <MemoryRouter>
      <CustomFilterContainer />
    </MemoryRouter>
  ));

  context('when click "#순대국밥" tag', () => {
    const selectedTag = '순대국밥';

    it('calls dispatch with action : setCategoryFilter', () => {
      const { getByText } = renderHomeCategoryTagsContainer();

      fireEvent.click(getByText('#순대국밥'));

      expect(dispatch).toBeCalledWith({
        type: 'setCategoryFilter',
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
