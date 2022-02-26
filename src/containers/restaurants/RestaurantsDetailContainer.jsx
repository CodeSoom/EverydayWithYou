// import styled from '@emotion/styled';

import { useSelector } from "react-redux"

export default function RestaurantsDetailContainer() {
  const filteredPlaceResult = useSelector((state) => state.filteredPlaceResult);
  const { place_url } = filteredPlaceResult
  console.log(filteredPlaceResult)

  function handleClick(place_url) {
    window.location.assign(`${place_url}`)
  }

  return (
    <>
      <button
        type='button'
        onClick={() => handleClick(place_url)}>
        지도에서 보기
      </button>
    </>
  )
}
