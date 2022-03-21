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

  // ToDo 테스트코드 구현
  context('when clicks selection', () => {
    it('calls dispatch with action: setSituationFilter', () => {
      const { getByAltText } = renderSituationSelectContainer();

      fireEvent.click(getByAltText('img1'));
      fireEvent.click(getByAltText('img2'));
      fireEvent.click(getByAltText('img3'));

      expect(dispatch).toBeCalled();
    });
  });
});
