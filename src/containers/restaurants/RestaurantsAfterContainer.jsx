import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import { loadItem } from "../../services/storage";

const RestaurantAfterContainer = styled.div({
  width: '400px',
  backgroundColor: '#F5F5F5',
});

const Map = styled.div({
  width: '400px',
  height: '328px',
})

export default function RestaurantsAfterContainer() {
  const { address_name } = useSelector((state) => state.filteredPlaceResult);
  const { after_course } = JSON.parse(loadItem(('selectedRestaurant')))[0];

  return (
    <RestaurantAfterContainer>
      <Map id='map'></Map>
    </RestaurantAfterContainer>
  )
}
