// 관심사: 타이틀표시 및 전체적인 레이아웃
import styled from '@emotion/styled';

import PostFormContainer from '../containers/PostFormContainer';

const PageTitleBox = styled.div({
  padding: '48px 0',
});


export default function PostFormPage() {
  return (
    <>
      <PageTitleBox><h1>나만 알던 맛집을 소개해주세요!</h1></PageTitleBox>
      <PostFormContainer />
    </>
  )
}
