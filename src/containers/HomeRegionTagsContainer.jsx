import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setRestaurants,
  sortRestaurantsByRegion,
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

export default function HomeRegionTagsContainer({ restaurantsData }) {
  const uniqRegions = uniqBy(restaurantsData, 'region');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurantsData));
  }, []);

  function handleClickTag(selectedTag, selectedId) {
    dispatch(sortRestaurantsByRegion(selectedTag));
    dispatch(selectRegionTag(selectedId));
  }

  const selectedRegion = useSelector((state) => (
    state.selectedRegion === null ?
      state : state.selectedRegion
  ));
  const {color} = selectedRegion;

  const sortedRestaurantsByRegion = useSelector((state) => ({
    sortedRestaurantsByRegion: state.sortedRestaurantsByRegion,
  }));
  console.log(sortedRestaurantsByRegion);

  return (
    <TagsBox>
      <p>어디로 가고 싶나요?</p>
      {uniqRegions.map((obj) => (
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
