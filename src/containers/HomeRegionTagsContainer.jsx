import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setRegions,
  sortByRegion,
  selectRegionTag,
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
  const sortRegions = uniqBy(regionsArr, 'region');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions(regionsArr));
  }, []);

  function handleClickTag(selectedName, selectedId) {
    dispatch(sortByRegion(selectedName));
    dispatch(selectRegionTag(selectedId));
  }

  const selectedRegion = useSelector((state) => (
    state.selectedRegion === null ?
      state : state.selectedRegion
  ));
  const {color} = selectedRegion;
  console.log(selectedRegion);

  const sortedRegions = useSelector((state) => ({
    sortedRegions: state.sortedRegions,
  }));
  console.log(sortedRegions);

  return (
    <TagsBox>
      <p>어디로 가고 싶나요?</p>
      {sortRegions.map((obj) => (
        <Hashtags
          type="button"
          key={obj.id}
          onClick={() => handleClickTag(obj.region, obj.id)}
          className={
            obj.id === selectedRegion.id ?
              color : ""
          }
        >
            #{obj.region}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
