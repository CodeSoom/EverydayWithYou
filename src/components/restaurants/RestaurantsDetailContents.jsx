import styled from '@emotion/styled';

import facepaint from 'facepaint';

import RestaurantsMap from './RestaurantsMap';
import KakaoMapBtn from '../kakao/KakaoMapBtn';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const DetailContentsContainer = styled.div(() => mq({
  backgroundColor: ['auto', '#fff', '#fff'],
}));

const DetailContents_img = styled.div(() => mq({
  height: ['79.65vw', '30vh', '30vh'],
  position: ['static', 'relative', 'relative'],
  '& button': {
    position: ['static', 'absolute', 'absolute'],
    right: '1rem',
    bottom: '1rem',
    color: ['auto', '#fff', '#fff'],
    borderColor: ['auto', '#fff', '#fff'],
  },
  '& img': {
    width: '100%',
    height: ['79.65vw', '30vh', '30vh'],
    objectFit: 'cover',
    boxShadow: ['none', '0px 24.25px 24.25px rgba(0, 0, 0, 0.05)', '0px 24.25px 24.25px rgba(0, 0, 0, 0.05)'],
  },
}));

const DetailContents_name = styled.div(() => mq({
  display: 'flex',
  justifyContent: 'center',
  '& h4': {
    marginTop: ['3.5vw', '1rem', '1rem'],
    fontWeight: '400',
    fontSize: ['4.5vw', '1.5rem', '1.5rem'],
    color: '#4F4F4F',
  },
}));

const DetailContents = styled.div(() => mq({
  display: 'flex',
  padding: ['3.5vw 7vw', '1rem 3rem', '1rem 3rem'],
  color: '#4F4F4F',
  fontSize: ['3.5vw', '1rem', '1rem'],
}));

const DetailContents_category = styled.div(() => mq({
  display: 'flex',
  flexDirection: 'column',
  width: ['30%', '20%', '20%'],
  '& div': {
    height: '100%',
  },
  '& span': {
    fontWeight: '700',
    marginBottom: ['1.75vw', '0.5rem', '0.5rem'],
  },
}));

const DetailContents_info = styled.div(() => mq({
  display: 'flex',
  flexDirection: 'column',
  '& span': {
    marginBottom: ['1.75vw', '0.5rem', '0.5rem'],
  },
}));

const RoadAddress = styled.div(() => mq({
  marginBottom: ['1.75vw', '0.5rem', '0.5rem'],
}));

const RoadAddressTitle = styled.span(() => mq({
  color: '#828282',
  fontWeight: '700',
  fontSize: ['3vw', '0.875rem', '0.875rem'],
}));

const RoadAddressName = styled.span(() => mq({
  color: '#828282',
  fontSize: ['3vw', '0.875rem', '0.875rem'],
}));

export default function RestaurantsDetailContents({
  isPc,
  img, restaurantName, placeUrl,
  addressName, roadAddressName,
  phoneNumber, categoryName,
  priceRange, mood,
}) {
  return (
    <>
      <DetailContentsContainer>
        <DetailContents_img>
          <img src={`${img}`} />
          {isPc ?
            <KakaoMapBtn
              placeUrl={placeUrl}
            />
            : null
          }
        </DetailContents_img>
        <DetailContents_name>
          <h4>
            {restaurantName}
          </h4>
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
      <RestaurantsMap
        isPc={isPc}
        placeUrl={placeUrl}
      />
    </>
  )
}
