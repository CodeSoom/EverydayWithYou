import { render } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomeCategoryTagsContainer from './HomeCategoryTagsContainer';

jest.mock('react-redux');

describe('HomeCategoryTagsContainer', () => {
  const categoriesArr = [
    { id: 10, name: '청와옥', category: '순대국밥' },
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  const renderHomeCategoryTagsContainer = () => render((
    <MemoryRouter>
      <HomeCategoryTagsContainer
        categoriesArr={categoriesArr}
      />
    </MemoryRouter>
  ));

  context('with "순대국밥" button', () => {
    it('calls dispatch with action : setCategories', () => {
      const { container } = renderHomeCategoryTagsContainer();

      expect(container).toHaveTextContent('순대국밥');

      expect(dispatch).toBeCalledWith({
        type: 'setCategories',
        payload: { categoriesArr },
      })
    });
  });
});
