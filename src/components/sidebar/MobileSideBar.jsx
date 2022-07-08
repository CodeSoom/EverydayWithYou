import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const SideBarLeftContainer = styled.div({
  backgroundColor: '#fff',
  height: '100vh',
  width: '15.5vw',
  padding: '3% 0',
  zIndex: 3,

  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const SideBarLeftContainer_hamberger = styled.div({
  '& img': {
    width: '10vw',
  },
})

const SideBarLeftContainer_logo = styled.div({
  '& img': {
    width: '10vw',
  },
})

export default function MobileSideBar({ onClickHamberger }) {
  return (
    <SideBarLeftContainer>
      <SideBarLeftContainer_hamberger>
        <button
          type='button'
          onClick={() => onClickHamberger()}
        >
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/mobile-hamberger-icon.svg'
          />
        </button>
      </SideBarLeftContainer_hamberger>
      <Link to='/home'>
        <SideBarLeftContainer_logo>
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/mobile-logo-icon.svg'
          />
        </SideBarLeftContainer_logo>
      </Link>
    </SideBarLeftContainer>
  )
}
