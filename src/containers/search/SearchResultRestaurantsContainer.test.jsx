import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import SearchResultRestaurantsContainer from './SearchResultRestaurantsContainer';

describe('SearchResultRestaurantsContainer', () => {
  const searchResultRestaurants = [
    {
      "id": "10",
      "name": "더다이닝랩",
      "situation": "소개팅",
      "age": "20대",
      "place": "마포구/홍대/합정",
      "category": "양식",
      "priceRange": "3만원 이하",
      "mood": null,
      "after_course": null,
    },
  ]

  beforeEach(() => {
  })

  const renderSearchResultRestaurantsContainer = () => render((
    <MemoryRouter>
      <SearchResultRestaurantsContainer
        searchResultRestaurants={searchResultRestaurants}
      />
    </MemoryRouter>
  ));

  it('renders search result', () => {
    renderSearchResultRestaurantsContainer();
  });
});
