import styled from '@emotion/styled';

const MapButton = styled.button({
  backgroundColor: 'transparent',
  padding: '6px 18px',
  borderRadius: '22px',
  fontWeight: '700',
  fontSize: '14px',
  color: '#4F4F4F',
  border: '#4F4F4F solid 1px',
  ':hover, :focus': {
    backgroundColor: '#ffdc00',
    border: '#3496ff solid 1px',
    fontWeight: '700',
    color: '#3496ff',
  },
});

export default function KakaoMapBtn({ placeUrl }) {
  function handleClick(placeUrl) {
    window.location.assign(`${placeUrl}`);
  }

  return (
    <MapButton
      type='button'
      onClick={() => handleClick(placeUrl)}>
      카카오맵에서 보기
    </MapButton>
  )
}
