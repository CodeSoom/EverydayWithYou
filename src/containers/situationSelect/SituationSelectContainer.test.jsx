// 관심사: 기존 레스토랑 정보 베이스로 레스토랑 업데이트
import { fireEvent, render } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import SituationSelectContainer from './SituationSelectContainer';

jest.mock('react-redux');

describe('SituationSelectContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector(
      'selector', 1,
    ));
  });

  const renderSituationSelectContainer = () => render((
    <MemoryRouter>
      <SituationSelectContainer />
    </MemoryRouter>
  ));

  context('when clicks selection', () => {
    it('calls dispatch with action: setSituationFilter', () => {
      const { getByText } = renderSituationSelectContainer();

      fireEvent.click(getByText('알아가는 그대와 : 소개팅, 썸'));

      expect(dispatch).toBeCalled();
    });
  });
});
