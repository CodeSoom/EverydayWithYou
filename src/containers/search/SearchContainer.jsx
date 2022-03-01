import styled from '@emotion/styled';

const Search = styled.input({
  backgroundColor: '#fff',
  color: '0E0E0E',
})

const Button = styled.button({
  backgroundColor: '#FA625B',
  color: '#fff',
})

export default function SearchPage({ onChangeKeyword, onClickSearch }) {
  function handleChange(event) {
    const { target: { value } } = event;
    onChangeKeyword({ value });
  }

  return (
    <>
      <Search
        type='text'
        onChange={handleChange}
      />
      <Button
        type='button'
        onClick={() => onClickSearch()}
      >
        검색
      </Button>
    </>
  )
}
