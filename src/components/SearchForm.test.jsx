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

  it('calls onClick event to click "돋보기" button', () => {
    renderSearchForm();

    // ToDo 테스트구현
  });

  it('calls onChange event to change input field', () => {
    const { getByDisplayValue } = renderSearchForm();

    fireEvent.change(getByDisplayValue(''), {
      target: { value: '홍대' },
    });

    expect(handleChange).toBeCalled();
  });
});
