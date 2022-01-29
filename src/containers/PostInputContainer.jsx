import { useSelector, useDispatch } from 'react-redux';

import PostInputForm from '../components/PostInputForm';

import {
  setRestaurantName,
} from '../actions';

import PostFormBox from '../style/PostFormBox';

export default function PostInputContainer() {
  // ToDoDelete 상태 잘 바뀌는지 확인용
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
    </PostFormBox>
  )
}
