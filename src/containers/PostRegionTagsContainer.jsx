import { useSelector, useDispatch } from 'react-redux';

import PostRegionTagsForm from '../components/PostRegionTagsForm';

import {
  selectRegionTag,
} from '../actions';

import PostFormBox from '../style/PostFormBox';

export default function PostFormContainer() {
  // ToDoDelete 상태 잘 바뀌는지 확인용
  const selectedRegion = useSelector((state) => ({
    regions: state.regions,
  }));
  console.log(selectedRegion);

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
