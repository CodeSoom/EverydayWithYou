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
    const { container, getByLabelText, getByText } = renderPostFormContainer();

    expect(getByLabelText('가게 이름')).toBeInTheDocument();
    expect(container).toHaveTextContent('태그');
    expect(getByText('#혼밥')).toBeInTheDocument();
    expect(getByText('#서울 송파')).toBeInTheDocument();
    expect(getByText('#면')).toBeInTheDocument();
    expect(getByText('공유')).toBeInTheDocument();
  });
});
