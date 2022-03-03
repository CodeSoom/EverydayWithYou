import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector } from 'react-redux';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '& h4': {
    fontWeight: '700',
    color: '#000',
    padding: '4rem 3rem',
  },
});

const RestaurantBox = styled.div({
  display: 'flex',
  padding: '1rem',
  '& img': {
    width: '250px',
    height: '150px',
    objectFit: 'cover',
    marginRight: '1.5rem',
  },
});

const Contents = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '& h5': {
    color: '#000',
    fontWeight: '700',
  },
  '& p': {
    color: '#595959',
    fontWeight: '700',
  },
});

const ConfirmButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#FA625B',
  color: '#fff',
  padding: '8px 20px',
  borderRadius: '24px',
  fontSize: '18px',
})

export default function CustomRestaurantsContainer() {
  const filteredRestaurantsData = useSelector((state) =>
    (state.filteredRestaurantsData));

  const uniqRestaurants = uniqBy(filteredRestaurantsData, 'name');

  return (
    <Container>
      <h4>고객님이 좋아할 음식점 추천</h4>
      {
        uniqRestaurants.map((restaurant) => (
          <ul key={restaurant.id}>
            <li>
              <RestaurantBox>
                <a
                  href={`/restaurants/${restaurant.name}`}
                >
                  <img src={`${restaurant.img}`} />
                </a>
                <Contents>
                  <div>
                    <a
                      href={`/restaurants/${restaurant.name}`}
                    >
                      <h5>{restaurant.name}</h5>
                    </a>
                    {`${restaurant.category} · ${restaurant.place}`}
                    <br />
                    <p>{restaurant.mood === null ?
                      '' : `#${restaurant.mood}`
                    }</p>
                  </div>
                  <div>
                    <a
                      href={`/restaurants/${restaurant.name}`}
                    >
                      <ConfirmButton type='button'>
                        상세보기
                        <i className="material-icons">chevron_right</i>
                      </ConfirmButton>
                    </a>
                  </div>
                </Contents>
              </RestaurantBox>
            </li>
          </ul>
        ))
      }
    </Container>
  )
}
