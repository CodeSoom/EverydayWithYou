import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const HorizontalRestaurantsListContainer = styled.div({
  padding: '3rem',
})

const Title = styled.h4({
  fontSize: '1.5rem',
  fontWeight: '400',
  color: '#828282',
  marginBottom: '1rem',
  marginTop: '2rem',
})

const HorizontalRestaurantsList = styled.div({
  display: 'flex',
  overflowY: 'hidden',
})
const HorizontalRestaurantsList_restaurant = styled.li({
  backgroundColor: '#fff',
  padding: '1rem',
  marginRight: '2rem',
  marginBottom: '1rem',
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.04)',
  height: '17rem',
  '& img': {
    width: '250px',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
});
const HorizontalRestaurantsList_restaurant_contents = styled.div({
  display: 'flex',
  flexDirection: 'column',
  color: '#828282',
  fontSize: '1rem',
  '& h4': {
    fontSize: '1rem',
    fontWeight: '700',
  },
});

export default function SearchResultRestaurants({ searchKeyword, moodRestaurantsData }) {
  const moodNames = Object.keys(moodRestaurantsData)

  return (
    <HorizontalRestaurantsListContainer>
      {moodNames.map((moodName) => (
        <>
          <Title>
            {moodName === 'null' ? `${searchKeyword}의 모든 음식점` : `#${moodName}`}
          </Title>
          <HorizontalRestaurantsList>
            {moodRestaurantsData[moodName].map(restaurant => (
              <Link
                to={`/restaurants/${restaurant.name}`}
                key={restaurant.id}
              >
                <HorizontalRestaurantsList_restaurant
                  key={restaurant.id}
                >
                  <img src={`${restaurant.img}`} />
                  <HorizontalRestaurantsList_restaurant_contents>
                    <h4>{restaurant.name}</h4>
                    {`${restaurant.category} · ${restaurant.place}`}
                    <br />
                    {restaurant.mood === null ?
                      '' : `#${restaurant.mood}`
                    }
                  </HorizontalRestaurantsList_restaurant_contents>
                </HorizontalRestaurantsList_restaurant>
              </Link>
            ))}
          </HorizontalRestaurantsList>
        </>
      ))}
    </HorizontalRestaurantsListContainer>
  )
}
