import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import CustomRestaurantsContainer from './CustomRestaurantsContainer';

describe('CustomRestaurantsContainer', () => {
  const renderCustomRestaurantsContainer = () => render((
    <MemoryRouter>
      <CustomRestaurantsContainer
      />
    </MemoryRouter>
  ));

  it('calls dispatch with action : setRestaurants', () => {
    const { container } = renderCustomRestaurantsContainer();

    expect(container).toHaveTextContent('가게이름');
  });
});
