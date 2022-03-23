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

    // ToDo 액션고치고 수정하기
    useSelector.mockImplementation((selector) => (
      selector.situationRestaurantsData = [
        {
          "id": "10",
          "name": "더다이닝랩",
          "situation": "소개팅",
          "age": "20대",
          "place": "마포구/홍대",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": null,
          "after_course": null,
        },
      ]
    ));
  });

  const renderApp = ({ path }) => render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));

  it('renders home page path to "/"', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('오늘은');
  });

  it('renders home page path to "/home"', () => {
    const { container } = renderApp({ path: '/home' });

    expect(container).toHaveTextContent('어디 갈지 모르겠나요?');
  });

  it('renders board page path to "/custom"', () => {
    const { container } = renderApp({ path: '/custom' });

    expect(container).toHaveTextContent('뭐 먹지?');
  });

  // ToDo 테스트 구현
  /* it('renders restaurants page path to "/restaurants/:name"', () => {
    const { container } = renderApp({ path: '/restaurants/:name' });

    expect(options).toBeInTheDocument();
    expect(map).toBeInTheDocument();
  });

  it('renders search page path to "/search"', () => {
    const { container } = renderApp({ path: '/search' });

    expect(container).toHaveTextContent('지역, 음식 또는 가게이름을 검색해 보세요.');
  });

  */
});
