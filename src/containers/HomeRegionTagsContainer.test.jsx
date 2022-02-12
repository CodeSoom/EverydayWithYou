import { render, fireEvent } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomeRegionTagsContainer from './HomeRegionTagsContainer';

jest.mock('react-redux');

describe('HomeRegionTagsContainer', () => {
  // 최초 JSON 데이터
  const restaurantsData = [
    { id: 1, name: '청와옥', region: '서울 송파구' },
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedRegion:
      { id: 1, name: '청와옥', region: '서울 송파구', color: 'blue' },
    }));
  });

  const renderHomeRegionTagsContainer = () => render((
    <MemoryRouter>
      <HomeRegionTagsContainer
        restaurantsData={restaurantsData}
      />
    </MemoryRouter>
  ));

  context('render home page', () => {
    it('calls dispatch with action : setRestaurants', () => {
      const { container } = renderHomeRegionTagsContainer();

      expect(container).toHaveTextContent('#서울 송파구');

      expect(dispatch).toBeCalledWith({
        type: 'setRestaurants',
        payload: { restaurantsData },
      })
    });
  });

  context('when click "#서울 송파구" tag', () => {
    it('calls dispatch with action : sortRestaurantsByRegion', () => {
      const selectedTag = '서울 송파구';

      const { getByText } = renderHomeRegionTagsContainer();

      fireEvent.click(getByText('#서울 송파구'));

      expect(dispatch).toBeCalledWith({
        type: 'sortRestaurantsByRegion',
        payload: { selectedTag },
      })
    });

    it('calls dispatch with action : selectRegionTag', () => {
      const selectedId = 1;

      const { getByText } = renderHomeRegionTagsContainer();

      fireEvent.click(getByText('#서울 송파구'));

      expect(dispatch).toBeCalledWith({
        type: 'selectRegionTag',
        payload: { selectedId },
      })
    });
  });
});
