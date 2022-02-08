import { render } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomeConditionTagsContainer from './HomeConditionTagsContainer';

jest.mock('react-redux');

describe('HomeConditionTagsContainer', () => {
  const conditionsArr = [
    { id: 10, name: '청와옥', condition: '과음한 다음 날' },
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  const renderHomeConditionTagsContainer = () => render((
    <MemoryRouter>
      <HomeConditionTagsContainer
        conditionsArr={conditionsArr}
      />
    </MemoryRouter>
  ));

  context('with "과음한 다음 날" button', () => {
    it('calls dispatch with action : setConditions', () => {
      const { container } = renderHomeConditionTagsContainer();

      expect(container).toHaveTextContent('과음한 다음 날');

      expect(dispatch).toBeCalledWith({
        type: 'setConditions',
        payload: { conditionsArr },
      })
    });
  });
});
