import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import PostCategoryTagsContainer from './PostCategoryTagsContainer';

jest.mock('react-redux');

describe('PostCategoryTagsContainer', () => {
  const restaurants = [
    { id: 1, name: '청와옥', category: '순대국밥' },
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedCategory:
        { id: 1, name: '청와옥', category: '순대국밥', color: 'select' },
    }));
  });

  const renderPostCategoryTagsContainer = () => render((
    <MemoryRouter>
      <PostCategoryTagsContainer
        restaurants={restaurants}
      />
    </MemoryRouter>
  ));

  context('when click "#순대국밥" tag', () => {
    const selectedId = 1;

    it('calls dispatch with action : selectCategoryTag', () => {
      const { getByText } = renderPostCategoryTagsContainer();

      expect(getByText('#순대국밥')).toBeInTheDocument();

      fireEvent.click(getByText('#순대국밥'))

      expect(dispatch).toBeCalledWith({
        type: 'selectCategoryTag',
        payload: { selectedId },
      });
    });
  });
});
