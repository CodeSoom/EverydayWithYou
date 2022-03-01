import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import SearchPage from './SearchPage';

describe('SearchPage', () => {
  const restaurants = [
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
    {
      "id": "36",
      "name": "보이어",
      "situation": "데이트",
      "age": "20대",
      "place": "성수",
      "category": "양식",
      "priceRange": "3만원 이하",
      "mood": "고급스러운",
      "after_course": null,
    },
  ];

  const renderSearchPage = () => render((
    <MemoryRouter>
      <SearchPage
        restaurants={restaurants}
      />
    </MemoryRouter>
  ));

  it('renders search page', () => {
    renderSearchPage();
  });
});
