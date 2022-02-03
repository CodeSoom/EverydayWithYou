import { useDispatch } from 'react-redux';

import PostConditionTagsForm from '../components/PostConditionTagsForm';

import {
  selectConditionTag,
} from '../actions';

import PostFormBox from '../style/PostFormBox';

export default function PostConditionTagsContainer() {
  const dispatch = useDispatch();

  function handleClickTag(selectedId) {
    dispatch(selectConditionTag(selectedId)) // 선택한 컨디션태그를 id 베이스로 찾아줌
  }

  return (
    <PostFormBox>
      <PostConditionTagsForm
        onClickTag={handleClickTag}
      />
    </PostFormBox>
  )
}
