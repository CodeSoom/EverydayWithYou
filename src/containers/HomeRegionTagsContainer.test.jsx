import { render } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomeRegionTagsContainer from './HomeRegionTagsContainer';

jest.mock('react-redux');

describe('HomeRegionTagsContainer', () => {
  const regionsArr = [
    { id: 10, name: '청와옥', region: '서울 송파구' },
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  const renderHomeRegionTagsContainer = () => render((
    <MemoryRouter>
      <HomeRegionTagsContainer
        regionsArr={regionsArr}
      />
    </MemoryRouter>
  ));

  context('with "서울 송파구" button', () => {
    it('calls dispatch with action : setRegions', () => {
      const { container } = renderHomeRegionTagsContainer();

      expect(container).toHaveTextContent('서울 송파구');

      expect(dispatch).toBeCalledWith({
        type: 'setRegions',
        payload: { regionsArr },
      })
    });
  });
});
