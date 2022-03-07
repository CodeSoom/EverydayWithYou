import styled from '@emotion/styled';

const TopSearchContainer = styled.div({
  backgroundColor: '#fff',
  '& div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: '6%',
    paddingRight: '6%',
  },
})

const TopSearchContainer_input = styled.input({
  color: '#4F4F4F',
  textAlign: 'right',
  fontSize: '4.6vw',
  marginRight: '4.6vw',
  marginBottom: 0,
})

const TopSearchContainer_button = styled.button({
  backgroundColor: '#FA625B',
  '& img': {
    width: '10vw',
  },
})

export default function MobileSearchForm({ searchField, onClickSearch, onChangeKeyword }) {
  const { searchKeyword } = searchField

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChangeKeyword({ name, value });
  }

  return (
    <TopSearchContainer>
      <div>
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
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/mobile-icon/mobile-search-icon.svg'
          />
        </TopSearchContainer_button>
      </div>
    </TopSearchContainer>
  )
}
