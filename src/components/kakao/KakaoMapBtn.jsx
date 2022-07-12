import styled from '@emotion/styled';

import mq from '../../shared/media-query';

const MapButton = styled.button(() => mq({
  width: ['100%', 'auto', 'auto'],
  backgroundColor: ['#ffdc00', 'transparent', 'transparent'],
  color: ['#3496ff', '#4F4F4F', '#4F4F4F'],
  border: ['none', '#4F4F4F solid 1px', '#4F4F4F solid 1px'],
  padding: ['1.56vw 6.25vw', '10px 20px', '10px 20px'],
  borderRadius: ['none', '28px', '28px'],
  fontWeight: '700',
  fontSize: ['4.2vw', '1rem', '1rem'],
  ':hover, :focus': {
    backgroundColor: '#ffdc00',
    border: ['none', '#3496ff solid 1px', '#3496ff solid 1px'],
    fontWeight: '700',
    color: '#3496ff',
  },
}));

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
  );
}
