import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedCondition: { color: 'blue', id: 1, name: '혼밥' },
      selectedRegion: { color: 'blue', id: 1, name: '서울 송파구' },
      selectedCategory: { color: 'blue', id: 1, name: '면' },
      restaurant: { name: '멘카야' },
    }));
  });

  const renderApp = ({ path }) => render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));

  it('renders home page path to "/"', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('맛집 추천하기');
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
