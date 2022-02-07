import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import PostBtnContainer from './PostBtnContainer';

describe('PostBtnContainer', () => {
  const renderPostBtnContainer = () => render((
    <MemoryRouter>
      <PostBtnContainer />
    </MemoryRouter>
  ));

  it('renders "등록" button', () => {
    const { getByText } = renderPostBtnContainer();

    expect(getByText('등록')).toBeInTheDocument();
  });
});
