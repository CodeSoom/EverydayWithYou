import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import PostPlaceTagsContainer from './PostPlaceTagsContainer';

jest.mock('react-redux');

describe('PostPlaceTagsContainer', () => {
  const restaurants = [
    { id: 1, name: '청와옥', place: '서울 송파구' },
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
    }));
  });

  const renderPostPlaceTagsContainer = () => render((
    <MemoryRouter>
      <PostPlaceTagsContainer
        restaurants={restaurants}
      />
    </MemoryRouter>
  ));

  context('when click place tag', () => {
    const selectedId = 1;

    it('calls dispatch with action : selectPlaceTag', () => {
      const { getByText } = renderPostPlaceTagsContainer();

      expect(getByText('#서울 송파구')).toBeInTheDocument();

      fireEvent.click(getByText('#서울 송파구'))

      expect(dispatch).toBeCalledWith({
        type: 'selectPlaceTag',
        payload: { selectedId },
      });
    });
  });
});
