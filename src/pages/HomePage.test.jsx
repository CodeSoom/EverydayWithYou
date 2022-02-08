import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  const restaurants = [
    {
      "name": "청와옥",
      "id": "10",
      "condition": "과음한 다음 날",
      "region": "서울 송파구",
      "category": "순대국밥",
    },
    {
      "name": "별미곱창",
      "id": "11",
      "condition": "회식",
      "region": "서울 송파구",
      "category": "곱창, 막창",
    },
    {
      "name": "뱃놈",
      "id": "12",
      "condition": "친구들이랑",
      "region": "서울 광진구",
      "category": "조개",
    },
  ]

  const renderHomePage = () => render((
    <MemoryRouter>
      <HomePage restaurants={restaurants}/>
    </MemoryRouter>
  ));

  it('renders "맛집 추천하기" text with link to "/post"', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('맛집 추천하기');
  });
});
