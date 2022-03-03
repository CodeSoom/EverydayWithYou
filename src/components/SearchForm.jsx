import styled from '@emotion/styled';

const TopSearchContainer = styled.div({
  height: '140px',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
})

const TopSearchBox_input = styled.input({
  width: '50%',
  height: '5rem',
  fontSize: '1.75rem',
  color: '#828282',
  textAlign: 'right',
  padding: '0 2rem',
})

const TopSearchBox_button = styled.button({
  backgroundColor: '#FA625B',
  color: '#fff',
  width: '5rem',
  height: '5rem',
})

export default function SearchForm({ searchField, onClickSearch, onChangeKeyword }) {
  const { searchKeyword } = searchField

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChangeKeyword({ name, value });
  }

  return (
    <TopSearchContainer>
      <TopSearchBox_input
        name='searchKeyword'
        type='text'
        onChange={handleChange}
        value={searchKeyword || ''}
      />
      <TopSearchBox_button
        type='button'
        onClick={() => onClickSearch()}
      >
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.1998 24.1998L17.7998 17.7998M11.3998 20.9998C6.09787 20.9998 1.7998 16.7017 1.7998 11.3998C1.7998 6.09787 6.09787 1.7998 11.3998 1.7998C16.7017 1.7998 20.9998 6.09787 20.9998 11.3998C20.9998 16.7017 16.7017 20.9998 11.3998 20.9998Z" stroke="white" strokeWidth="2" />
        </svg>
      </TopSearchBox_button>
    </TopSearchContainer>
  )
}
