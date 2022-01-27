// 관심사: 타이틀표시 및 전체적인 레이아웃

import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import PostFormPage from './PostFormPage';

describe('PostFormPage', () => {
  const renderPostFormPage = () => render((
    <MemoryRouter>
      <PostFormPage />
    </MemoryRouter>
  ));

  it('renders title of board write page', () => {
    const { container } = renderPostFormPage();

    expect(container).toHaveTextContent('나만 알던 맛집을 소개해주세요!');
  });
});
