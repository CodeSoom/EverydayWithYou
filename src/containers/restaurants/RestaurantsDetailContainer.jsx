// import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import KakaoMapBtn from '../../components/KakaoMapBtn';
import KakaoShareBtn from '../../components/KakaoShareBtn';

export default function RestaurantsDetailContainer() {
  const filteredPlaceResult = useSelector((state) => state.filteredPlaceResult);
  const place_url = filteredPlaceResult.place_url;

  return (
    <>
      <KakaoMapBtn
        placeUrl={place_url}
      />
      <KakaoShareBtn />
    </>
  )
}
