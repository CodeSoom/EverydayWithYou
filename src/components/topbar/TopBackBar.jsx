import styled from '@emotion/styled';

import facepaint from 'facepaint';

import { Link } from 'react-router-dom';

import { removeItem } from '../../services/storage';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const Top_BackBar = styled.div(() => mq({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: '#fff',
  color: '#828282',
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.04)',
  padding: ['5% 0', '1.45rem 0', '1.45rem 0'],
  paddingLeft: ['5vw', '2rem', '2rem'],
  '& img': {
    marginRight: ['1vw', '0.5rem', '0.5rem'],
    width: ['6vw', 'auto', 'auto'],
    color: '#828282',
  },
  '& p': {
    fontWeight: '700',
    fontSize: ['4vw', '1.25rem', '1.25rem'],
  },
}))

export default function TopBackBar() {
  function handleClickBack() {
    removeItem('resultRestaurant');
  }

  return (
    <>
      <Link to='/custom' onClick={() => handleClickBack()}>
        <Top_BackBar>
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/back-grey.svg'
          />
          <p>
            맞집 찾기로 돌아가기
          </p>
        </Top_BackBar>
      </Link>
    </>
  )
}
