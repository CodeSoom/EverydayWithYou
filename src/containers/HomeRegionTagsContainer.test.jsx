import { render } from '@testing-library/react';

import context from 'jest-plugin-context';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomeRegionTagsContainer from './HomeRegionTagsContainer';

jest.mock('react-redux');

describe('HomeRegionTagsContainer', () => {
  const renderHomeRegionTagsContainer = () => render((
    <MemoryRouter>
      <HomeRegionTagsContainer />
    </MemoryRouter>
  ));

  context('???', () => {
    it('calls dispatch with action : ', () => {
      renderHomeRegionTagsContainer();
    });
  });
});
