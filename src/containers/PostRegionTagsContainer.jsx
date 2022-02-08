import { useSelector, useDispatch } from 'react-redux';

import PostRegionTagsForm from '../components/PostRegionTagsForm';

import {
  selectRegionTag,
  setRegions,
} from '../actions';

import styled from '@emotion/styled';

const PostFormBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export default function PostRegionTagsContainer() {
  const dispatch = useDispatch();

  const selectedRegion = useSelector((state) => (
    state.selectedRegion === null ?
      state : state.selectedRegion
  ));

  function handleClickTag(selectedId) {
    dispatch(selectRegionTag(selectedId));
    dispatch(setRegions());
  }

  return (
    <PostFormBox>
      <PostRegionTagsForm
        onClickTag={handleClickTag}
        selectedRegion={selectedRegion}
      />
    </PostFormBox>
  )
}
