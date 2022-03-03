// import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

export default function RandomSituationPlaceRestaurants() {
  const randomSituationPlaceRestaurants = useSelector((state) => (
    state.randomSituationPlaceRestaurants
  ));
  const situation = useSelector((state) => (
    state.situation
  ));
  const place = useSelector((state) => (
    state.place
  ));

  function condition(situation) {
    if (
      situation == '소개팅' ||
      situation == '데이트' ||
      situation == '프로프즈'
    ) {
      return `${situation}하기 좋은 ${place}의 음식점`
    } else if (
      situation == '썸'
    ) {
      return `${situation}탈 때 가기 좋은 ${place}의 음식점`
    } else if (
      situation == '생일' ||
      situation == '기념일'
    ) {
      return `${situation}에 가기 좋은 ${place}의 음식점`
    }
  }

  const titleCondition = condition(situation)

  return (
    <>
      <h4>
        {titleCondition}
      </h4>
      {randomSituationPlaceRestaurants.map(restaurant => (
        <ul key={restaurant.id}>
          <li>
            {restaurant.name}
          </li>
        </ul>
      ))}
    </>
  )
}
