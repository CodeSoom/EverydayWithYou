import styled from '@emotion/styled';

import mq from '../../shared/media-query';

const SEARCH_ICON = 'https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/search-icon.svg';

const Container = styled.div(() => mq({
  position: 'fixed',
  left: ['15.5vw', '18.75rem', '18.75rem'],
  right: 0,
  top: 0,
  zIndex: 1,
  paddingTop: '3.75rem',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Input = styled.input(() => mq({
  width: '50%',
  fontSize: ['4.5vw', '1.5rem', '1.5rem'],
  color: '#4F4F4F',
  textAlign: 'right',
  marginRight: ['4.6vw', '0.875rem', '0.875rem'],
  border: 'none',
}));

const Button = styled.button(() => mq({
  backgroundColor: '#FA625B',
  '& img': {
    width: ['10vw', '3rem', '3rem'],
  },
}));

export default function SearchForm({
  modalEffect,
  searchKeyword,
  onClickSearch,
  onChangeKeyword,
}) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChangeKeyword({ name, value });
  }

  function handleClick() {
    if (!searchKeyword) {
      alert('검색어를 입력해주세요!');
      return;
    }

    onClickSearch();
  }

  function handleEnterKey() {
    if (window.event.keyCode == 13) {
      onClickSearch();
    }
  }

  return (
    <Container className={modalEffect}>
      <Input
        name='searchKeyword'
        type='search'
        onChange={handleChange}
        value={searchKeyword || ''}
        onKeyUp={handleEnterKey}
      />
      <Button
        type='button'
        onClick={handleClick}
      >
        <img src={SEARCH_ICON} />
      </Button>
    </Container>
  );
}
