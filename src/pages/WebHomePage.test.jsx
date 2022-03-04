import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import HomePage from './HomePage';

jest.mock('react-redux');

describe('HomePage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  const renderHomePage = () => render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  it('renders text', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('고객님이 좋아할 음식점 추천');
  });
});
