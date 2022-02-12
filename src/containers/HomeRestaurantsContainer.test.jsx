import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomeRestaurantsContainer from './HomeRestaurantsContainer';

describe('HomeRestaurantsContainer', () => {
  const renderHomeRestaurantsContainer = () => render((
    <MemoryRouter>
      <HomeRestaurantsContainer
      />
    </MemoryRouter>
  ));

  it('calls dispatch with action : setRestaurants', () => {
    const { container } = renderHomeRestaurantsContainer();

    expect(container).toHaveTextContent('가게이름');
  });
});
