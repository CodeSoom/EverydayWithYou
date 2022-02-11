import { fireEvent, render } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import PostCategoryTagsContainer from './PostCategoryTagsContainer';

jest.mock('react-redux');

describe('PostCategoryTagsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedCategory: { color: 'blue', id: 1, name: '면' },
    }));
  });

  const renderPostCategoryTagsContainer = () => render((
    <MemoryRouter>
      <PostCategoryTagsContainer />
    </MemoryRouter>
  ));

  context('when click category tag', () => {
    const selectedId = 1;

    it('calls dispatch with action : selectCategoryTag', () => {
      const { container, getByText } = renderPostCategoryTagsContainer();

      expect(container).toHaveTextContent('무엇을 드셨나요?');
      expect(getByText('#면')).toBeInTheDocument();

      fireEvent.click(getByText('#면'))

      expect(dispatch).toBeCalledWith({
        type: 'selectCategoryTag',
        payload: { selectedId },
      });
    });

    it('calls dispatch with action : setRestaurants', () => {
      const { getByText } = renderPostCategoryTagsContainer();

      fireEvent.click(getByText('#면'))

      expect(dispatch).toBeCalled();
    });
  });
});
