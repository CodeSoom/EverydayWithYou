import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import KakaoShareBtn from '../../components/kakao/KakaoShareBtn';
import KakaoMapBtn from '../../components/kakao/KakaoMapBtn';

import { loadItem } from "../../services/storage";

const RestaurantsPageLeft = styled.div({
  width: '100%',
  height: '100vh',
  position: 'sticky',
  top: '0',
  '& img': {
    width: '100%',
    height: '328px',
    objectFit: 'cover',
  },
});

const Wrapper = styled.div({
  height: '461px',
  padding: '3rem 2rem',
  background: 'linear-gradient(to top, transparent, 90%, rgba(0,0,0,0.05) )',
})

const RestaurantName = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '0.5rem',
  '& h3': {
    fontWeight: '700',
    color: '#000',
    marginRight: '0.5rem',
  },
})

const Container = styled.div({
  display: 'flex',
  padding: '1rem',
})

const TitleBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '20%',
  '& span': {
    fontWeight: '700',
    marginBottom: '0.5rem',
  },
  '& div': {
    height: '24px',
  },
})

const ContentsBox = styled.div({
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
  color: '#595959',
  fontWeight: '700',
  fontSize: '14px',
})

const RoadAddressName = styled.span({
  color: '#595959',
  fontSize: '14px',
})

const BottomBox = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '1rem 0',
  '& span': {
    fontSize: '18px',
    marginRight: '1rem',
  },
})

export default function RestaurantsDetailContainer() {
  const { place_url } = useSelector((state) => state.filteredPlaceResult);
  const { place_name } = useSelector((state) => state.filteredPlaceResult);
  const { address_name } = useSelector((state) => state.filteredPlaceResult);
  const { road_address_name } = useSelector((state) => state.filteredPlaceResult);
  const { phone } = useSelector((state) => state.filteredPlaceResult);
  const { category_name } = useSelector((state) => state.filteredPlaceResult);


  const { img } = JSON.parse(loadItem(('selectedRestaurant')))[0];
  const { priceRange } = JSON.parse(loadItem(('selectedRestaurant')))[0];
  const { mood } = JSON.parse(loadItem(('selectedRestaurant')))[0];

  return (
    <RestaurantsPageLeft>
      <img src={`${img}`} />
      <Wrapper>
        <div></div>
        <RestaurantName>
          <h3>{place_name}</h3>
          <KakaoMapBtn
            placeUrl={place_url}
          />
        </RestaurantName>
        <hr />
        <Container>
          <TitleBox>
            <span>주소</span>
            <div></div>
            <span>전화번호</span>
            <span>음식 종류</span>
            <span>가격대</span>
            <span>분위기</span>
          </TitleBox>
          <ContentsBox>
            <div>
              <span>{address_name}</span>
              <RoadAddress>
                <RoadAddressTitle>지번 </RoadAddressTitle>
                <RoadAddressName>{road_address_name}</RoadAddressName>
              </RoadAddress>
            </div>
            <span>{phone}</span>
            <span>{category_name}</span>
            <span>{priceRange}</span>
            <span>{mood}</span>
          </ContentsBox>
        </Container>
        <BottomBox>
          <span>데이트 상대에게 공유해볼까요?</span>
          <KakaoShareBtn />
        </BottomBox>
      </Wrapper>
    </RestaurantsPageLeft>
  )
}
