import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector } from 'react-redux';

import { saveItem } from '../../services/storage';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '& h4': {
    fontWeight: '700',
    color: '#0E0E0E',
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
    color: '#0E0E0E',
    fontWeight: '700',
  },
  '& p': {
    color: '#595959',
    fontWeight: '700',
  },
  '& button': {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#E77591',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '20px',
    fontSize: '18px',
  },
});

export default function CustomRestaurantsContainer() {
  const filteredRestaurantsData = useSelector((state) =>
    (state.filteredRestaurantsData));

  const uniqRestaurants = uniqBy(filteredRestaurantsData, 'name');

  function handleClickRestaurant(restaurantName) {
    const selectedRestaurant = uniqRestaurants.filter(restaurant =>
      restaurant.name === restaurantName,
    );
    saveItem('selectedRestaurant', JSON.stringify(selectedRestaurant)); // 배열형식 저장
  }

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
                  onClick={() => handleClickRestaurant(restaurant.name)}
                >
                  <img src={`${restaurant.img}`} />
                </a>
                <Contents>
                  <div>
                    <a
                      href={`/restaurants/${restaurant.name}`}
                      onClick={() => handleClickRestaurant(restaurant.name)}
                    >
                      <h5>{restaurant.name}</h5>
                    </a>
                    {`${restaurant.category} · ${restaurant.place}`}
                    <br />
                    <p>{restaurant.mood === "none" ?
                      '' : restaurant.mood
                    }</p>
                  </div>
                  <div>
                    <a
                      href={`/restaurants/${restaurant.name}`}
                      onClick={() => handleClickRestaurant(restaurant.name)}
                    >
                      <button type='button'>
                        상세보기
                        <i className="material-icons">chevron_right</i>
                      </button>
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
