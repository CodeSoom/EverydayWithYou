import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

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

    useSelector.mockImplementation((selector) => selector({
      getRegion: 
      { id: 10, name: '청와옥', region: '서울 송파구', color: 'blue' },
    }));
  });

  const renderHomeRegionTagsContainer = () => render((
    <MemoryRouter>
      <HomeRegionTagsContainer
        regionsArr={regionsArr}
      />
    </MemoryRouter>
  ));

  context('render home page', () => {
    it('calls dispatch with action : setRegions', () => {
      const { container } = renderHomeRegionTagsContainer();

      expect(container).toHaveTextContent('#서울 송파구');

      expect(dispatch).toBeCalledWith({
        type: 'setRegions',
        payload: { regionsArr },
      })
    });
  });

  context('when click "#서울 송파구" tag', () => {
    const regionObj = 
    { id: 10, name: '청와옥', region: '서울 송파구' };

    it('calls dispatch with action : getRegionTag', () => {
      const { getByText } = renderHomeRegionTagsContainer();

      fireEvent.click(getByText('#서울 송파구'));

      expect(dispatch).toBeCalledWith({
        type: 'getRegionTag',
        payload: { regionObj },
      })
    });
  });
});
