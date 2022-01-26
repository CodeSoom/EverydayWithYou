import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import BoardPage from './BoardPage';

describe('BoardPage', () => {
  const renderBoardPage = () => render((
    <MemoryRouter>
      <BoardPage />
    </MemoryRouter>
  ));

  it('renders text', () => {
    const { container } = renderBoardPage();

    expect(container).toHaveTextContent('게시판');
  });
});
