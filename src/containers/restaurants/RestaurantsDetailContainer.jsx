import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import KakaoShareBtn from '../../components/KakaoShareBtn';
import KakaoMapBtn from '../../components/KakaoMapBtn';

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

const Container = styled.div({
  height: '461px',
  padding: '3rem 2rem',
})

const TitleBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '0.5rem',
  '& h4': {
    fontWeight: '700',
    color: '#0E0E0E',
    marginRight: '0.5rem',
  },
})

const ContentsBox = styled.div({
})

const Address = styled.div({
})

const Contact = styled.div({
})

const Category = styled.div({
})

const Price = styled.div({
})

const Mood = styled.div({
})

const BottomBox = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '1rem 0',
  '& span': {
    fontSize: '18px',
    marginRight: '0.5rem',
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
      <Container>
        <TitleBox>
          <h4>{place_name}</h4>
          <KakaoMapBtn
            placeUrl={place_url}
          />
        </TitleBox>
        <hr />
        <ContentsBox>
          <Address>
            <span>주소</span>
            <div>
              <span>{address_name}</span>
              <div>
                <span>지번</span>
                <span>{road_address_name}</span>
              </div>
            </div>
          </Address>
          <Contact>
            <span>전화번호</span>
            <span>{phone}</span>
          </Contact>
          <Category>
            <span>음식 종류</span>
            <span>{category_name}</span>
          </Category>
          <Price>
            <span>가격대</span>
            <span>{priceRange}</span>
          </Price>
          <Mood>
            <span>분위기</span>
            <span>{mood}</span>
          </Mood>
        </ContentsBox>
        <BottomBox>
          <span>데이트 상대에게 공유해볼까요?</span>
          <KakaoShareBtn />
        </BottomBox>
      </Container>
    </RestaurantsPageLeft>
  )
}
