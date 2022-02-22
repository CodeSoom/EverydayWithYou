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
          "place": "홍대/합정",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "none",
          "2nd-course": "none",
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

    expect(container).toHaveTextContent('놀러 가는 목적이 무엇인지 알려주세요 . 💕');
    expect(container).toHaveTextContent('코스를 알려드리는 여정이 시작됩니다 !');
  });

  it('renders home page path to "/home"', () => {
    const { container } = renderApp({ path: '/home' });

    expect(container).toHaveTextContent('선호도를 반영한 취향 저격 음식점');
  });

  it('renders board page path to "/custom"', () => {
    const { container } = renderApp({ path: '/custom' });

    expect(container).toHaveTextContent('어디 갈지 모르겠다구요?');
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
