import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import RecommendationContainer from './RecommendationContainer';

describe('RecommendationContainer', () => {
  beforeEach(() => {
  })

  const renderRecommendationContainer = () => render((
    <MemoryRouter>
      <RecommendationContainer />
    </MemoryRouter>
  ));

  it('renders recommendation', () => {
    renderRecommendationContainer();
  });
});
