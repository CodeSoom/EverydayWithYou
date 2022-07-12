import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import RestaurantsDetailContents from '../../components/restaurants/RestaurantsDetailContents';

import { loadItem } from "../../services/storage";

import mq from '../../shared/media-query';

const DetailContainer = styled.div(() => mq({
  height: ['auto', '100%', '100%'],
  width: ['100%', '60%', '60%'],
  position: ['static', 'sticky', 'sticky'],
  top: 0,
  left: ['15.5vw', '18.75rem', '18.75rem'],
}));

export default function RestaurantDetailContainer({ isPc }) {
  const {
    place_name, place_url,
    address_name, road_address_name,
    phone, category_name,
  } = useSelector((state) => state.resultRestaurantPlaceInfo);

  const {
    img, priceRange, mood,
  } = JSON.parse(loadItem(('resultRestaurant')))[0];

  return (
    <DetailContainer>
      <RestaurantsDetailContents
        isPc={isPc}
        img={img}
        restaurantName={place_name}
        placeUrl={place_url}
        addressName={address_name}
        roadAddressName={road_address_name}
        phoneNumber={phone}
        categoryName={category_name}
        priceRange={priceRange}
        mood={mood}
      />
    </DetailContainer>
  );
}
