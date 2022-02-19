import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import PostSituationTagsContainer from './PostSituationTagsContainer';

jest.mock('react-redux');

describe('PostSituationTagsContainer', () => {
  const restaurants = [
    { id: 1, name: '청와옥', situation: '과음한 다음 날' },
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({

    }));
  });

  const renderPostSituationTagsContainer = () => render((
    <MemoryRouter>
      <PostSituationTagsContainer
        restaurants={restaurants}
      />
    </MemoryRouter>
  ));

  context('when click situation tag', () => {
    const selectedId = 1;

    it('calls dispatch with action : selectSituationTag', () => {
      const { getByText } = renderPostSituationTagsContainer();

      expect(getByText('#과음한 다음 날')).toBeInTheDocument();

      fireEvent.click(getByText('#과음한 다음 날'))

      expect(dispatch).toBeCalledWith({
        type: 'selectSituationTag',
        payload: { selectedId },
      });
    });
  });
});
