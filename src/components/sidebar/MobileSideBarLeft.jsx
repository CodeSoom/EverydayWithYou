import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const MobileSideBarLeftContainer = styled.div({
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
})

const MobileSideBarLeftContainer_hamberger = styled.div({
  '& img': {
    width: '10vw',
  },
})

const MobileSideBarLeftContainer_logo = styled.div({
  '& img': {
    width: '10vw',
  },
})

export default function MoblieSideBarLeft({ onClickHamberger }) {
  return (
    <MobileSideBarLeftContainer>
      <MobileSideBarLeftContainer_hamberger>
        <button
          type='button'
          onClick={() => onClickHamberger()}
        >
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/mobile-icon/mobile-hamberger-icon.svg'
          />
        </button>
      </MobileSideBarLeftContainer_hamberger>
      <Link to='/home'>
        <MobileSideBarLeftContainer_logo>
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/mobile-icon/mobile-logo-icon.svg'
          />
        </MobileSideBarLeftContainer_logo>
      </Link>
    </MobileSideBarLeftContainer>
  )
}
