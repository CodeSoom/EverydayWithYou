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

  it('renders title of post form page', () => {
    const { container } = renderPostFormPage();

    expect(container).toHaveTextContent('나만 알던 맛집을 소개해주세요!');
  });

  it('renders "가게 이름" input, "태그" button, "공유" button', () => {
    const { getByLabelText, getByText } = renderPostFormPage();

    expect(getByLabelText('가게 이름')).toBeInTheDocument();
    expect(getByText('#혼밥')).toBeInTheDocument();
    expect(getByText('#서울 송파구')).toBeInTheDocument();
    expect(getByText('#면')).toBeInTheDocument();
    expect(getByText('공유')).toBeInTheDocument();
  });
});
