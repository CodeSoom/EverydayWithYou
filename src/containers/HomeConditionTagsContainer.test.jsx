import { render } from '@testing-library/react';

import context from 'jest-plugin-context';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomeConditionTagsContainer from './HomeConditionTagsContainer';

jest.mock('react-redux');

describe('HomeConditionTagsContainer', () => {
  const renderHomeConditionTagsContainer = () => render((
    <MemoryRouter>
      <HomeConditionTagsContainer />
    </MemoryRouter>
  ));

  context('???', () => {
    it('calls dispatch with action : ', () => {
      renderHomeConditionTagsContainer();
    });
  });
});
