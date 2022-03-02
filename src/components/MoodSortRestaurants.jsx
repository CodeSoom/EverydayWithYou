// import styled from '@emotion/styled';

export default function MoodSortRestaurants({ searchField, moodRestaurantsData }) {
  const { searchKeyword } = searchField;
  const moodNames = Object.keys(moodRestaurantsData)

  return (
    <>
      {
        moodNames.map((moodName) => (
          <ul key={moodName} >
            <h5>
              {moodName === 'null' ? `${searchKeyword}의 모든 음식점` : moodName}
            </h5>
            {
              moodRestaurantsData[moodName].map((restaurant) => (
                <li key={restaurant.id}>
                  <span>
                    {restaurant.name}
                  </span>
                </li>
              ))
            }
          </ul>
        ))
      }
    </>
  )
}
