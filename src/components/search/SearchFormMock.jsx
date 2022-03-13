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
  paddingTop: '3.75rem',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const TopSearchContainer_input = styled.input(() => mq({
  width: '50%',
  fontSize: ['4.5vw', '1.5rem', '1.5rem'],
  color: '#4F4F4F',
  textAlign: 'right',
  marginRight: ['4.6vw', '0.875rem', '0.875rem'],
}));

const TopSearchContainer_button = styled.button(() => mq({
  backgroundColor: '#FA625B',
  '& img': {
    width: ['10vw', '3rem', '3rem'],
  },
}));

export default function SearchFormMock({ searchKeyword }) {
  return (

    <TopSearchContainer>
      <TopSearchContainer_input
        value={searchKeyword || ''}
      />
      <TopSearchContainer_button
        type='button'
      >
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/search-icon.svg'
        />
      </TopSearchContainer_button>
    </TopSearchContainer>
  )
}
