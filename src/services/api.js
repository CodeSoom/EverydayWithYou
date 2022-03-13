export async function fetchAfterRestaurants({ x, y }) {
  if (x && y) {
    const url = 'https://dapi.kakao.com/v2/local/search/keyword.json?'
      + `y=${y}&x=${x}&radius=4000&query=주변맛집&size=5&category_group_code=FD6`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `KakaoAK 8c7627c2b88511dcb164b8b917ed22d5`,
      },
    });

    const { documents } = await response.json();
    return documents;
  }
}

export async function fetchAfterCafes({ x, y }) {
  if (x && y) {
    const url = 'https://dapi.kakao.com/v2/local/search/keyword.json?'
      + `y=${y}&x=${x}&query=주변카페&radius=4000&size=5&category_group_code=CE7`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `KakaoAK 8c7627c2b88511dcb164b8b917ed22d5`,
      },
    });

    const { documents } = await response.json();
    return documents;
  }
}

export async function fetchAfterBars({ x, y }) {
  if (x && y) {
    const url = 'https://dapi.kakao.com/v2/local/search/keyword.json?'
      + `y=${y}&x=${x}&query=주변술집&radius=4000&size=5`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `KakaoAK 8c7627c2b88511dcb164b8b917ed22d5`,
      },
    });

    const { documents } = await response.json();
    return documents;
  }
}

export async function fetchRecommendCourse({ x, y, after_course }) {
  if (x && y) {
    const url = 'https://dapi.kakao.com/v2/local/search/keyword.json?'
      + `y=${y}&x=${x}&query=${after_course}&radius=4000&size=1`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `KakaoAK 8c7627c2b88511dcb164b8b917ed22d5`,
      },
    });

    const { documents } = await response.json();
    return documents;
  }
}
