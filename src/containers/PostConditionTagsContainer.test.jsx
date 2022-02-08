import { fireEvent, render } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import PostConditionTagsContainer from './PostConditionTagsContainer';

jest.mock('react-redux');

describe('PostConditionTagsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedCondition: { color: 'blue', id: 1, name: '혼밥' },
    }));
  });

  const renderPostConditionTagsContainer = () => render((
    <MemoryRouter>
      <PostConditionTagsContainer />
    </MemoryRouter>
  ));

  context('when click condition tag', () => {
    const selectedId = 1;

    it('calls dispatch with action : selectConditionTag', () => {
      const { container, getByText } = renderPostConditionTagsContainer();

      expect(container).toHaveTextContent('어떤 상황인가요?');
      expect(getByText('#혼밥')).toBeInTheDocument();

      fireEvent.click(getByText('#혼밥'))

      expect(dispatch).toBeCalledWith({
        type: 'selectConditionTag',
        payload: { selectedId },
      });
    });

    it('calls dispatch with action : setConditions', () => {
      const { getByText } = renderPostConditionTagsContainer();

      fireEvent.click(getByText('#혼밥'))

      expect(dispatch).toBeCalled();
    });
  });
});
