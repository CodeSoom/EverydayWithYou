import styled from '@emotion/styled';

const SearchInput = styled.input({
  backgroundColor: '#fff',
  color: '0E0E0E',
})

const SearchButton = styled.button({
  backgroundColor: '#FA625B',
  color: '#fff',
})

export default function SearchForm({ searchField, onClickSearch, onChangeKeyword }) {
  const { searchKeyword } = searchField

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChangeKeyword({ name, value });
  }

  return (
    <>
      <SearchInput
        name='searchKeyword'
        type='text'
        onChange={handleChange}
        value={searchKeyword || ''}
      />
      <SearchButton
        type='button'
        onClick={() => onClickSearch()}
      >
        검색
      </SearchButton>
    </>
  )
}
