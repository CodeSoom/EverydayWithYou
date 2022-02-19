import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import PostPage from './PostPage';

describe('PostPage', () => {
  const restaurants = [
    {
      "name": "청와옥",
      "id": "10",
      "situation": "과음한 다음 날",
      "place": "서울 송파구",
      "category": "순대국밥",
    },
    {
      "name": "별미곱창",
      "id": "11",
      "situation": "회식",
      "place": "서울 송파구",
      "category": "곱창, 막창",
    },
    {
      "name": "뱃놈",
      "id": "12",
      "situation": "친구들이랑",
      "place": "서울 광진구",
      "category": "조개",
    },
  ]

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({

    }));
  });

  const renderPostPage = () => render((
    <MemoryRouter>
      <PostPage restaurants={restaurants} />
    </MemoryRouter>
  ));

  it('renders title of post form page', () => {
    const { container } = renderPostPage();

    expect(container).toHaveTextContent('나만 알던 맛집을 소개해주세요!');
  });

  it('renders "가게 이름" input, "태그" buttons, "등록" button', () => {
    const { getByLabelText, getByText } = renderPostPage();

    expect(getByLabelText('가게 이름')).toBeInTheDocument();
    expect(getByText('등록')).toBeInTheDocument();
  });
});
