import { useDispatch } from 'react-redux';

import PostInputForm from '../components/PostInputForm';

import {
  setRestaurantName,
} from '../actions';

import styled from '@emotion/styled';

const PostFormBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export default function PostInputContainer() {
  const dispatch = useDispatch();

  function handleChangeInput({ value }) {
    dispatch(setRestaurantName({ value }))
  }

  return (
    <PostFormBox>
      <PostInputForm
        onChangeInput={handleChangeInput}
      />
    </PostFormBox>
  )
}
