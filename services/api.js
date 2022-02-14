export function fetchSearchResult(keyword) {
  const url = 'https://map.kakao.com/link'
  + `/search/${keyword}`; // 검색어(keyword)를 이용하여 검색결과를 표시한 상태의 URL를 만듦

  console.log(url);
}
