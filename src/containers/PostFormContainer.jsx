import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';

import PostInputForm from '../renderings/PostInputForm';
import PostTagForm from '../renderings/PostTagForm';

import {
  setRestaurantName,
} from '../actions';

const PostFormBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

//ToDo 화면에 렌더링해주는 컴포넌트로 각각 따로 분리
export default function PostFormContainer() {
  useSelector((state) => ({
    name: state.restaurant.name,
  }));

  const dispatch = useDispatch();

  function handleChangeInput({ value }) {
    dispatch(setRestaurantName({ value }))
  }

  return (
    <PostFormBox>
      <PostInputForm
        onChangeInput={handleChangeInput}
      />
      <PostTagForm />
      <button type='button'>공유</button>
    </PostFormBox>
  )
}
