// import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

export default function RandomAgeCategoryRestaurants() {
  const randomAgeCategoryRestaurants = useSelector((state) => (
    state.randomAgeCategoryRestaurants
  ));
  const age = useSelector((state) => (
    state.age
  ));
  const category = useSelector((state) => (
    state.category
  ));

  function condition(category) {
    if (
      category == '이탈리안' ||
      category == '스테이크'
    ) {
      return `${age}가 좋아하는 ${category} 음식점`
    } else if (category == '인도음식') {
      return `${age}가 좋아하는 ${category}점`
    } else {
      return `${age}가 좋아하는 ${category}`
    }
  }

  const titleCondition = condition(category)

  return (
    <>
      <h4>
        {titleCondition}
      </h4>
      {randomAgeCategoryRestaurants.map(restaurant => (
        <ul key={restaurant.id}>
          <li>
            {restaurant.name}
          </li>
        </ul>
      ))}
    </>
  )
}
