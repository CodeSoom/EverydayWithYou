import styled from '@emotion/styled';

import facepaint from 'facepaint';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const TopSearchContainer = styled.div(() => mq({
  position: 'fixed',
  left: ['15.5vw', '18.75rem', '18.75rem'],
  right: 0,
  top: 0,
  zIndex: 1,
  height: '8.75rem',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
}));

const TopSearchContainer_input = styled.input({
  width: '50%',
  height: '5rem',
  fontSize: '1.75rem',
  color: '#4F4F4F',
  textAlign: 'right',
  padding: '0 2rem',
})

const TopSearchContainer_button = styled.button({
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
      <TopSearchContainer_input
        name='searchKeyword'
        type='text'
        onChange={handleChange}
        value={searchKeyword || ''}
      />
      <TopSearchContainer_button
        type='button'
        onClick={() => {
          searchKeyword ?
            onClickSearch()
            : alert('검색어를 입력해주세요!')
        }}
      >
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.1998 24.1998L17.7998 17.7998M11.3998 20.9998C6.09787 20.9998 1.7998 16.7017 1.7998 11.3998C1.7998 6.09787 6.09787 1.7998 11.3998 1.7998C16.7017 1.7998 20.9998 6.09787 20.9998 11.3998C20.9998 16.7017 16.7017 20.9998 11.3998 20.9998Z" stroke="white" strokeWidth="2" />
        </svg>
      </TopSearchContainer_button>
    </TopSearchContainer>
  )
}
