import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadItem } from '../../services/storage';

import RestaurantsAfterRestaurant from '../../components/restaurants/RestaurantsAfterRestaurant';
import RestaurantsAfterCafe from '../../components/restaurants/RestaurantsAfterCafe';
import RestaurantsAfterBar from '../../components/restaurants/RestaurantsAfterBar';
import RestaurantsAfterRecommendation from '../../components/restaurants/RestaurantsAfterRecommendation';

import {
  loadAfterCourse,
  searchAfterCourse,
} from '../../actions';

const RestaurantAfterContainer = styled.div({
  width: '400px',
  backgroundColor: '#F5F5F5',
});

export default function RestaurantsAfterContainer() {
  const dispatch = useDispatch();

  const filteredPlaceResult = useSelector((state) => state.filteredPlaceResult);
  const { after_course } = JSON.parse(loadItem(('selectedRestaurant')))[0];

  useEffect(() => {
    dispatch(loadAfterCourse());
    if (after_course) {
      dispatch(searchAfterCourse(after_course))
    }
  }, [filteredPlaceResult]);

  return (
    <RestaurantAfterContainer>
      <RestaurantsAfterRestaurant />
      <RestaurantsAfterCafe />
      <RestaurantsAfterBar />
      <RestaurantsAfterRecommendation />
    </RestaurantAfterContainer>
  )
}
