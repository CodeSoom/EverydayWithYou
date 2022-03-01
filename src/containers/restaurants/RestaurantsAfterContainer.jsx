import styled from '@emotion/styled';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadItem } from '../../services/storage';

import {
  loadAfterCourse,
  searchAfterCourse,
} from '../../actions';

const RestaurantAfterContainer = styled.div({
  width: '400px',
  backgroundColor: '#F5F5F5',
});

const Map = styled.div({
  width: '400px',
  height: '328px',
})

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

  /* const afterRestaurants = useSelector((state) => state.afterRestaurants);
  const afterCafes = useSelector((state) => state.afterCafes);
  const afterBars = useSelector((state) => state.afterBars);
  const recommendCourse = useSelector((state) => state.recommendCourse); */

  return (
    <RestaurantAfterContainer>
      <Map id='map'></Map>
    </RestaurantAfterContainer>
  )
}
