import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';

import PostInputForm from '../renderings/PostInputForm';

import {
  setRestaurantName,
} from '../actions';

const PostFormBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const HashtagBox = styled.div({
  display: 'flex',
});

//ToDo 화면에 렌더링해주는 컴포넌트로 각각 따로 분리
export default function PostFormContainer() {
  //ToDo delete (값 잘 입력되나 확인용)
  const restaurantName = useSelector((state) => ({
    name: state.restaurant.name,
  }));
  //ToDo delete (값 잘 입력되나 확인용)
  console.log(restaurantName);

  const dispatch = useDispatch();

  function handleChangeInput({ value }) {
    dispatch(setRestaurantName({ value }))
  }

  return (
    <PostFormBox>
      <PostInputForm
        onChangeInput={handleChangeInput}
      />
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
