// 관심사: 상태변경
import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import PostFormContainer from './PostFormContainer';

describe('PostFormContainer', () => {
  const renderPostFormContainer = () => render((
    <MemoryRouter>
      <PostFormContainer />
    </MemoryRouter>
  ));

  it('render contents', () => {
    const { container, getByText } = renderPostFormContainer();

    expect(container).toHaveTextContent('가게 이름');
    expect(container).toHaveTextContent('태그');
    expect(getByText('공유')).toBeInTheDocument();
  });
});
