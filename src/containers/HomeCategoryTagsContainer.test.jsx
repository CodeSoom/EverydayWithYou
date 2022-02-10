import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomeCategoryTagsContainer from './HomeCategoryTagsContainer';

jest.mock('react-redux');

describe('HomeCategoryTagsContainer', () => {
  // 최초 JSON 데이터
  const categoriesArr = [
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
        categoriesArr={categoriesArr}
      />
    </MemoryRouter>
  ));

  context('render home page', () => {
    it('calls dispatch with action : setCategories', () => {
      const { container } = renderHomeCategoryTagsContainer();

      expect(container).toHaveTextContent('#순대국밥');

      expect(dispatch).toBeCalledWith({
        type: 'setCategories',
        payload: { categoriesArr },
      })
    });
  });

  context('when click "#순대국밥" tag', () => {
    const selectedName = '순대국밥';

    it('calls dispatch with action : sortByCategory', () => {
      const { getByText } = renderHomeCategoryTagsContainer();

      fireEvent.click(getByText('#순대국밥'));

      expect(dispatch).toBeCalledWith({
        type: 'sortByCategory',
        payload: { selectedName },
      })
    });
  });
});
