import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setRegions,
  getRegionTag,
} from '../actions';

const TagsBox = styled.div({
  textAlign: 'left',
  marginBottom: '24px',
});

const Hashtags = styled.button({
  border: 'none',
  padding: '8px',
  margin: '4px',
  borderRadius: '4px',
});

export default function HomeRegionTagsContainer({ regionsArr }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions(regionsArr));
  }, []);

  function handleClickTag(regionObj) {
    dispatch(getRegionTag(regionObj));
  }

  const getRegion = useSelector((state) => (
    state.getRegion === null ?
      state : state.getRegion
  ));
  const {color} = getRegion;

  return (
    <TagsBox>
      <p>어디로 가고 싶나요?</p>
      {regionsArr.map((obj) => (
        <Hashtags
          type="button"
          key={obj.id}
          onClick={() => handleClickTag(obj)}
          className={
            obj.id === getRegion.id ?
              color : ""
          }
        >
            #{obj.region}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
