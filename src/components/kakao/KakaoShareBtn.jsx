import styled from '@emotion/styled';

import facepaint from 'facepaint';

import { useEffect } from 'react';

import { createKakaoBtn } from '../../kakao';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const ConfirmButton = styled.button(() => mq({
  width: ['100%', 'auto', 'auto'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FA625B',
  fontSize: ['4.2vw', '1rem', '1rem'],
  fontWeight: '700',
  color: '#fff',
  padding: ['1.56vw 6.25vw', '10px 20px', '10px 20px'],
  borderRadius: ['none', '28px', '28px'],
  '& img': {
    width: ['6vw', 'auto', 'auto'],
    marginRight: ['2vw', '0.5rem', '0.5rem'],
  },
}));

export default function KakaoShareBtn() {
  useEffect(() => {
    createKakaoBtn()
  }, [])

  return (
    <>
      <ConfirmButton id="kakao-link-btn">
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/share.svg'
        />
        공유하기
      </ConfirmButton>
    </>
  )
}
