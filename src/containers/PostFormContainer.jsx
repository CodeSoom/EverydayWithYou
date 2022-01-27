// 관심사: 상태변경
import styled from '@emotion/styled';

const PostFormBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const InputBox = styled.div({
  display: 'flex',
});

const HashtagBox = styled.div({
  display: 'flex',
});

//ToDo 화면에 렌더링해주는 컴포넌트로 각각 따로 분리
export default function PostFormContainer() {
  return (
    <PostFormBox>
      <InputBox>
        <label htmlFor='name'>가게 이름</label>
        <input id='name' type='text'></input>
      </InputBox>
      <HashtagBox>
        <p>태그</p>
        <button type='button'>#혼밥</button>
        <button type='button'>#서울 송파</button>
        <button type='button'>#면</button>
      </HashtagBox>
      <button type='button'>공유</button>
    </PostFormBox>
  )
}
