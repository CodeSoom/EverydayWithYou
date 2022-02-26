import { loadItem } from "./services/storage";

export function createKakaoBtn() {
  const selectedRestaurant = JSON.parse(loadItem(('selectedRestaurant')));
  const restaurant = selectedRestaurant[0];

  if (window.Kakao) {
    const kakao = window.Kakao

    if (!kakao.isInitialized()) { // 중복 initialization 방지
      kakao.init('8cbe20f536259f558e9b3a52f704bca0')
    }

    kakao.Link.createDefaultButton({ // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: `${restaurant.name} | ${restaurant.category} · ${restaurant.place}`,
        description: `${restaurant.mood === null ? '' : `#${restaurant.mood}`}`,
        imageUrl: `${restaurant.img}`,
        link: {
          mobileWebUrl: `https://superduper-india.codesoom.com/restaurants/${restaurant.name}`,
          webUrl: `https://superduper-india.codesoom.com/restaurants/${restaurant.name}`,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: `https://superduper-india.codesoom.com/restaurants/${restaurant.name}`,
            webUrl: `https://superduper-india.codesoom.com/restaurants/${restaurant.name}`,
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: `https://superduper-india.codesoom.com/restaurants/${restaurant.name}`,
            webUrl: `https://superduper-india.codesoom.com/restaurants/${restaurant.name}`,
          },
        },
      ],
    })
  }
}

export function createMap(lat, lon) {
  const container = document.getElementById('map');

  const options = {
    center: new window.kakao.maps.LatLng(lat, lon),
    level: 3,
  };

  const map = new window.kakao.maps.Map(container, options);

  return map;
}
