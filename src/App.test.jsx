import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import App from './App';

describe('App', () => {
  const renderApp = ({ path }) => render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));

  it('renders home page path to "/"', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('home');
  });

  it('renders board page path to "/board"', () => {
    const { container } = renderApp({ path: '/board' });

    expect(container).toHaveTextContent('게시판');
  });

  it('renders board page path to "/post"', () => {
    const { container } = renderApp({ path: '/post' });

    expect(container).toHaveTextContent('나만 알던 맛집을 소개해주세요!');
  });
});
