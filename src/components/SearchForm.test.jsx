import { render, fireEvent } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import SearchForm from './SearchForm';

describe('SearchForm', () => {
  const searchField = '홍대';
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  })

  const renderSearchForm = () => render((
    <MemoryRouter>
      <SearchForm
        searchField={searchField}
        onChangeKeyword={handleChange}
        onClickSearch={handleClick}
      />
    </MemoryRouter>
  ));

  it('calls onClick event to click "검색" button', () => {
    const { getByText } = renderSearchForm();

    fireEvent.click(getByText('검색'));

    expect(handleClick).toBeCalled();
  });

  it('calls onChange event to change input field', () => {
    const { getByDisplayValue } = renderSearchForm();

    fireEvent.change(getByDisplayValue(''), {
      target: { value: '홍대' },
    });

    expect(handleChange).toBeCalled();
  });
});
