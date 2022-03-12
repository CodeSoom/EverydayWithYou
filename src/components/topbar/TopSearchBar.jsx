import styled from '@emotion/styled';

import facepaint from 'facepaint'

import { Link } from 'react-router-dom';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const Top_SearchContainer = styled.div(() => mq({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  backgroundColor: '#F4F4F4',
  paddingTop: ['6%', '1.25rem', '1.25rem'],
  paddingRight: ['6%', '1.25rem', '1.25rem'],
  '& p': {
    marginRight: ['4.6vw', '0.875rem', '0.875rem'],
    fontSize: ['4.6vw', '0.875rem', '0.875rem'],
    color: '#828282',
  },
  '& img': {
    width: ['10vw', '2.5rem', '2.5rem'],
  },
}))

export default function TopSearchBar() {
  return (
    <>
      <Link to='/search'>
        <Top_SearchContainer>
          <p>지역, 음식 또는 가게이름</p>
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/search-icon.svg'
          />
        </Top_SearchContainer>
      </Link>
    </>
  )
}
