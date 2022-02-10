import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomeConditionTagsContainer from './HomeConditionTagsContainer';

jest.mock('react-redux');

describe('HomeConditionTagsContainer', () => {
  // 최초 JSON 데이터
  const conditionsArr = [
    { id: 1, name: '청와옥', condition: '과음한 다음 날' },
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedCondition: 
      { id: 1, name: '청와옥', condition: '과음한 다음 날', color: 'blue'},
    }));
  });

  const renderHomeConditionTagsContainer = () => render((
    <MemoryRouter>
      <HomeConditionTagsContainer
        conditionsArr={conditionsArr}
      />
    </MemoryRouter>
  ));

  context('render home page', () => {
    it('calls dispatch with action : setConditions', () => {
      const { container } = renderHomeConditionTagsContainer();

      expect(container).toHaveTextContent('#과음한 다음 날');

      expect(dispatch).toBeCalledWith({
        type: 'setConditions',
        payload: { conditionsArr },
      })
    });
  });

  context('when click "#과음한 다음 날" tag', () => {
    const selectedName = '과음한 다음 날';

    it('calls dispatch with action : sortByCondition', () => {
      const { getByText } = renderHomeConditionTagsContainer();

      fireEvent.click(getByText('#과음한 다음 날'));

      expect(dispatch).toBeCalledWith({
        type: 'sortByCondition',
        payload: { selectedName },
      })
    });
  });
});
