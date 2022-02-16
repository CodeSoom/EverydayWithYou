import { useDispatch } from 'react-redux';

import PostInputForm from '../../components/post/PostInputForm';

import {
  setRestaurantName,
} from '../../actions';

import styled from '@emotion/styled';

const InputBox = styled.div({
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
    <InputBox>
      <PostInputForm
        onChangeInput={handleChangeInput}
      />
    </InputBox>
  )
}
