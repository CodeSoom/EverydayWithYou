import { fireEvent, render } from '@testing-library/react';

import context from 'jest-plugin-context';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import PostRegionTagsContainer from './PostRegionTagsContainer';

jest.mock('react-redux');

describe('PostRegionTagsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedRegion: { color: 'blue', id: 1, name: '서울 송파구' },
    }));
  });

  const renderPostRegionTagsContainer = () => render((
    <MemoryRouter>
      <PostRegionTagsContainer />
    </MemoryRouter>
  ));

  context('when click region tag', () => {
    const selectedId = 1;

    it('calls dispatch with action : selectRegionTag', () => {
      const { container, getByText } = renderPostRegionTagsContainer();

      expect(container).toHaveTextContent('어디인가요?');
      expect(getByText('#서울 송파구')).toBeInTheDocument();

      fireEvent.click(getByText('#서울 송파구'))

      expect(dispatch).toBeCalledWith({
        type: 'selectRegionTag',
        payload: { selectedId },
      });
    });

    it('calls dispatch with action : setRegions', () => {
      const { getByText } = renderPostRegionTagsContainer();

      fireEvent.click(getByText('#서울 송파구'))

      expect(dispatch).toBeCalledWith({
        type: 'setRegions',
      });
    });
  });
});
