import { render, fireEvent } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import SearchContainer from './SearchContainer';

describe('SearchContainer', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
  })

  const renderSearchPage = () => render((
    <MemoryRouter>
      <SearchContainer
        onChangeKeyword={handleChange}
        onClickSearch={handleClick}
      />
    </MemoryRouter>
  ));

  it('calls onClick event to click "검색" button', () => {
    const { getByText } = renderSearchPage();

    fireEvent.click(getByText('검색'));

    expect(handleClick).toBeCalled();
  });
});
