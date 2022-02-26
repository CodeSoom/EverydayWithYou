// import styled from '@emotion/styled';

export default function KakaoMapBtn({ placeUrl }) {
  function handleClick(placeUrl) {
    window.location.assign(`${placeUrl}`);
  }

  return (
    <>
      <button
        type='button'
        onClick={() => handleClick(placeUrl)}>
        카카오맵에서 보기
      </button>
    </>
  )
}
