// ToDo delete

export default function RestaurantsContainer({ keyword }) {
  function handleClick(keyword) {
    window.location.assign(`https://map.kakao.com/link/search/${keyword}`)
  }

  return (
    <>
      <button
        type='button'
        onClick={() => handleClick(keyword)}>
        지도에서 보기
      </button>
    </>
  )
}
