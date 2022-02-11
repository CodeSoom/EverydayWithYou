import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      sortedConditions: [
        { id: 1, name: '청와옥', condition: '과음한 다음 날', color: 'blue' }
      ],
      sortedRegions: [
        { id: 1, name: '청와옥', region: '서울 송파구', color: 'blue' }
      ],
      sortedCategories: [
        { id: 1, name: '청와옥', category: '순대국밥', color: 'blue' }
      ],
      selectedCondition: 
      { id: 1, name: '청와옥', condition: '과음한 다음 날', color: 'blue'},
      selectedRegion: 
      { id: 1, name: '청와옥', region: '서울 송파구', color: 'blue'},
      selectedCategory: 
      { id: 1, name: '청와옥', category: '순대국밥', color: 'blue'},
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
