// import styled from '@emotion/styled';

import { useEffect } from 'react';

import { createKakaoBtn } from '../utils';

export default function KakaoShareBtn() {
  useEffect(() => {
    createKakaoBtn()
  }, [])

  return (
    <>
      <button id="kakao-link-btn">
        공유하기
      </button>
    </>
  )
}
