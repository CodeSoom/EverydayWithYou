import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import PostFormPage from './PostFormPage';

describe('PostFormPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedCondition: { color: 'blue', id: 1, name: '혼밥' },
      selectedRegion: { color: 'blue', id: 1, name: '서울 송파구' },
      selectedCategory: { color: 'blue', id: 1, name: '면' },
      restaurant: { name: '멘카야' },
    }));
  });

  const renderPostFormPage = () => render((
    <MemoryRouter>
      <PostFormPage />
    </MemoryRouter>
  ));

  it('renders title of post form page', () => {
    const { container } = renderPostFormPage();

    expect(container).toHaveTextContent('나만 알던 맛집을 소개해주세요!');
  });

  it('renders "가게 이름" input, "태그" buttons, "등록" button', () => {
    const { getByLabelText, getByText } = renderPostFormPage();

    expect(getByLabelText('가게 이름')).toBeInTheDocument();
    expect(getByText('#혼밥')).toBeInTheDocument();
    expect(getByText('#서울 송파구')).toBeInTheDocument();
    expect(getByText('#면')).toBeInTheDocument();
    expect(getByText('등록')).toBeInTheDocument();
  });
});
