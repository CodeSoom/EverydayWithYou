import styled from '@emotion/styled';

import facepaint from 'facepaint'

import { useMediaQuery } from "react-responsive"

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const Top_NavBar = styled.div(() => mq({
  width: '100%',
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
    <>
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
    </>
  )
}
