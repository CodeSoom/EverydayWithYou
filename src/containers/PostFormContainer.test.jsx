import { fireEvent, render } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import PostFormContainer from './PostFormContainer';

jest.mock('react-redux');

describe('PostFormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  const renderPostFormContainer = () => render((
    <MemoryRouter>
      <PostFormContainer />
    </MemoryRouter>
  ));

  it('render contents', () => {
    const { container, getByLabelText, getByText } = renderPostFormContainer();

    expect(getByLabelText('가게 이름')).toBeInTheDocument();
    expect(container).toHaveTextContent('어떤 상황인가요?');
    expect(container).toHaveTextContent('어디인가요?');
    expect(container).toHaveTextContent('무엇을 드셨나요?');
    expect(getByText('#혼밥')).toBeInTheDocument();
    expect(getByText('#서울 송파구')).toBeInTheDocument();
    expect(getByText('#면')).toBeInTheDocument();
    expect(getByText('공유')).toBeInTheDocument();
  });

  context('when change input value', () => {
    it('calls dispatch with action : setRestaurantName', () => {
      const { getByLabelText } = renderPostFormContainer();

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

  context('when click condition tag', () => {
    const selectedId = 1;

    it('calls dispatch with action : selectConditionTag', () => {
      const { getByText } = renderPostFormContainer();

      fireEvent.click(getByText('#혼밥'))

      expect(dispatch).toBeCalledWith({
        type: 'selectConditionTag',
        payload: { selectedId },
      });
    });
  });
});
