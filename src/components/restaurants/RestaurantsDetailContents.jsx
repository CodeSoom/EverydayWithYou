import styled from '@emotion/styled';

import facepaint from 'facepaint';

import KakaoMapBtn from '../kakao/KakaoMapBtn';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const DetailContentsContainer = styled.div({
  backgroundColor: '#fff',
  '& img': {
    width: '100%',
    height: '30vh',
    objectFit: 'cover',
    boxShadow: '0px 0px 24.25px rgba(0, 0, 0, 0.08)',
  },
})

const DetailContents_name = styled.div(() => mq({
  display: 'flex',
  justifyContent: 'center',
  padding: '0.25rem 0',
  '& h4': {
    fontWeight: '400',
    fontSize: '1.5rem',
    color: '#4F4F4F',
  },
  '& button': {
    position: 'absolute',
    right: '0.5rem',
    top: '25vh',
  },
}));

const DetailContents = styled.div({
  display: 'flex',
  padding: '1rem 3rem',
  color: '#4F4F4F',
  fontSize: '1rem',
})

const DetailContents_category = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '20%',
  '& div': {
    height: '3.5rem',
  },
  '& span': {
    fontWeight: '700',
    marginBottom: '0.5rem',
  },
})

const DetailContents_info = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '& span': {
    marginBottom: '0.5rem',
  },
})

const RoadAddress = styled.div({
  marginBottom: '0.5rem',
});

const RoadAddressTitle = styled.span({
  color: '#828282',
  fontWeight: '700',
  fontSize: '0.875rem',
})

const RoadAddressName = styled.span({
  color: '#828282',
  fontSize: '0.875rem',
})

export default function RestaurantsDetailContents({
  img, restaurantName, placeUrl,
  addressName, roadAddressName,
  phoneNumber, categoryName,
  priceRange, mood,
}) {
  return (
    <DetailContentsContainer>
      <img src={`${img}`} />
      <DetailContents_name>
        <h4>
          {restaurantName}
        </h4>
        <KakaoMapBtn
          placeUrl={placeUrl}
        />
      </DetailContents_name>
      <DetailContents>
        <DetailContents_category>
          <div>
            <span>주소</span>
          </div>
          <span>전화번호</span>
          <span>음식 종류</span>
          <span>가격대</span>
          {mood ? <span>분위기</span> : null}
        </DetailContents_category>
        <DetailContents_info>
          <div>
            <span>{addressName}</span>
            <RoadAddress>
              <RoadAddressTitle>지번 </RoadAddressTitle>
              <RoadAddressName>{roadAddressName}</RoadAddressName>
            </RoadAddress>
          </div>
          <span>{phoneNumber}</span>
          <span>{categoryName}</span>
          <span>{priceRange}</span>
          {mood ? <span>{mood}</span> : null}
        </DetailContents_info>
      </DetailContents>
    </DetailContentsContainer>
  )
}
