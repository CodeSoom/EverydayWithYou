import { fireEvent, render } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import PostInputContainer from './PostInputContainer';

jest.mock('react-redux');

describe('PostInputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  const renderPostInputContainer = () => render((
    <MemoryRouter>
      <PostInputContainer />
    </MemoryRouter>
  ));

  it('render contents', () => {
    const { getByLabelText } = renderPostInputContainer();

    expect(getByLabelText('가게 이름')).toBeInTheDocument();
  });

  context('when change input value', () => {
    it('calls dispatch with action : setRestaurantName', () => {
      const { getByLabelText } = renderPostInputContainer();

      const value = '';

      expect(getByLabelText('가게 이름').value).toBe(value);

      fireEvent.change(getByLabelText('가게 이름'), {
        target: { value: '멘카야' },
      })

      expect(dispatch).toBeCalledWith({
        type: 'setRestaurantName',
        payload: { value: '멘카야' },
      });
    });
  });
});
