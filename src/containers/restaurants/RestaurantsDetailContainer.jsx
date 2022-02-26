// import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import KakaoShareBtn from '../../components/KakaoShareBtn';

export default function RestaurantsDetailContainer() {
  const filteredPlaceResult = useSelector((state) => state.filteredPlaceResult);
  const place_url = filteredPlaceResult.place_url

  function handleClick(place_url) {
    window.location.assign(`${place_url}`)
  }

  return (
    <>
      <button
        type='button'
        onClick={() => handleClick(place_url)}>
        카카오맵에서 보기
      </button>
      <KakaoShareBtn />
    </>
  )
}
