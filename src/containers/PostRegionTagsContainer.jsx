import { useDispatch } from 'react-redux';

import PostRegionTagsForm from '../components/PostRegionTagsForm';

import {
  selectRegionTag,
} from '../actions';

import PostFormBox from '../style/PostFormBox';

export default function PostFormContainer() {
  const dispatch = useDispatch();

  function handleClickTag(selectedId) {
    dispatch(selectRegionTag(selectedId))
  }

  return (
    <PostFormBox>
      <PostRegionTagsForm
        onClickTag={handleClickTag}
      />
    </PostFormBox>
  )
}
