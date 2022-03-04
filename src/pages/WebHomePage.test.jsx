import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import WebHomePage from './WebHomePage';

jest.mock('react-redux');

describe('WebHomePage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  const renderWebHomePage = () => render((
    <MemoryRouter>
      <WebHomePage />
    </MemoryRouter>
  ));

  it('renders text', () => {
    const { container } = renderWebHomePage();

    expect(container).toHaveTextContent('고객님이 좋아할 음식점 추천');
  });
});
