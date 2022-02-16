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
      selectedSituation:
      { id: 1, name: '청와옥', situation: '과음한 다음 날', color: 'blue' },
      selectedPlace:
      { id: 1, name: '청와옥', place: '서울 송파구', color: 'blue' },
      selectedCategory:
      { id: 1, name: '청와옥', category: '순대국밥', color: 'blue' },
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

  it('renders board page path to "/post"', () => {
    const { container } = renderApp({ path: '/post' });

    expect(container).toHaveTextContent('나만 알던 맛집을 소개해주세요!');
  });

  // ToDo 테스트코드 작성
  /* it('renders board page path to "/map/:name"', () => {
    const { container } = renderApp({ path: '/map/:name' });

    expect(container).toHaveTextContent('');
  }); */
});
