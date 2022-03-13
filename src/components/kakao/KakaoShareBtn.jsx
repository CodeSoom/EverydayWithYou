import styled from '@emotion/styled';

import { useEffect } from 'react';

import { createKakaoBtn } from '../../kakao';

const ConfirmButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#FA625B',
  fontSize: '1rem',
  fontWeight: '700',
  color: '#fff',
  padding: '8px 20px',
  borderRadius: '24px',
});

export default function KakaoShareBtn() {
  useEffect(() => {
    createKakaoBtn()
  }, [])

  return (
    <>
      <ConfirmButton id="kakao-link-btn">
        공유하기
      </ConfirmButton>
    </>
  )
}
