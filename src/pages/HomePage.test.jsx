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

  it('renders "태그", "작성" text with link', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('태그');
    expect(container).toHaveTextContent('작성');
  });
});
