import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import BoardWritePage from './BoardWritePage';

describe('BoardWritePage', () => {
  const renderBoardWritePage = () => render((
    <MemoryRouter>
      <BoardWritePage />
    </MemoryRouter>
  ));

  it('renders text', () => {
    const { container } = renderBoardWritePage();

    expect(container).toHaveTextContent('글쓰기');
  });
});
