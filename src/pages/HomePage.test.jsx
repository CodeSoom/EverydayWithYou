import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  const renderHomePage = () => render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  it('renders "맛집 추천하기" text with link', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('맛집 추천하기');
  });
});
