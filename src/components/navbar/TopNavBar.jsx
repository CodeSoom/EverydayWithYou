import styled from '@emotion/styled';

import facepaint from 'facepaint'

import { useMediaQuery } from "react-responsive"

import { Link } from 'react-router-dom';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const Top = styled.div(() => mq({
  marginLeft: ['15.5vw', '18.75rem', '18.75rem'],
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  zIndex: '1',
}));

const Top_SearchContainer = styled.div(() => mq({
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

const Top_NavBar = styled.div(() => mq({
  display: 'flex',
  alignItems: 'center',
  justifyContent: ['center', 'flex-start', 'flex-start'],
  backgroundColor: '#fff',
  color: '#AEAEAE',
  fontWeight: '700',
  fontSize: ['3.5vw', '1.25rem', '1.25rem'],
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.04)',
  padding: ['5% 0', '1rem 0', '1rem 0'],
  paddingLeft: [0, '4.5rem', '4.5rem'],
  '& img': {
    padding: [0, '0 1.8rem', '0 1.8rem'],
  },
  '& p': {
    fontSize: ['3.5vw', '1.25rem', '1.25rem'],
  },
}))

export default function TopNavBar({ pointFont }) {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  return (
    <Top>
      <Link to='/search'>
        <Top_SearchContainer>
          <p>지역, 음식 또는 가게이름</p>
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/search-icon.svg'
          />
        </Top_SearchContainer>
      </Link>
      <Top_NavBar>
        <p
          className={
            pointFont == 'today' ?
              'point-font' : ''
          }
        >
          오늘은
        </p>
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/right-arrow-light-grey.svg'
        />
        <p
          className={
            pointFont == 'menu' ?
              'point-font' : ''
          }
        >
          {isPc ? '뭐 먹고 싶어요?' : '뭐 먹지?'}
        </p>
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/right-arrow-light-grey.svg'
        />
        <p
          className={
            pointFont == 'place' ?
              'point-font' : ''
          }
        >
          {isPc ? '어디로 갈까요?' : '어디로?'}
        </p>
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/right-arrow-light-grey.svg'
        />
        <p
          className={
            pointFont == 'result' ?
              'point-font' : ''
          }
        >
          {isPc ? '나에게 딱 맞는 맞집 추천!' : '맛집 결과!'}
        </p>
      </Top_NavBar>
    </Top>
  )
}
