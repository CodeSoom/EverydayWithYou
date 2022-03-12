import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const SideBarMenuContainer = styled.div({
  backgroundColor: '#fff',
  maxWidth: '100%',
  height: '100vh',
  width: '73vw',
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  zIndex: 3,
  padding: '3%',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const SideBarMenuContainer_close = styled.div({
  width: '100%',
  '& img': {
    width: '10vw',
  },
})

const SideBarMenuContainer_menu = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
const SideBarMenuContainer_menu_category = styled.li({
  color: '#828282',
  fontSize: '3.75vw',
  marginBottom: '6vh',
})

/* const SideBarMenuContainer_menu_information = styled.button({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '6vh',
  '& span': {
    color: '#828282',
    fontSize: '3.75vw',
    marginRight: '2.5vw',
  },
  '& img': {
    width: '3vw',
  },
}) */

const SideBarMenuContainer_logoCopyright = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  borderTop: 'solid 1px #828282',
  width: '60%',
  '& img': {
    width: '44vw',
  },
  '& span': {
    fontSize: '2vw',
    paddingBottom: '2vh',
    color: '#7D3200',
  },
})

export default function SideBarMenu({ onClickClose }) {
  return (
    <>
      <SideBarMenuContainer>
        <SideBarMenuContainer_close>
          <button
            type='button'
            onClick={() => onClickClose()}
          >
            <img
              src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/mobile-icon/mobile-close-icon.svg'
            />
          </button>
        </SideBarMenuContainer_close>

        <SideBarMenuContainer_menu>
          <Link
            to="/home"
            onClick={() => onClickClose()}
          >
            <SideBarMenuContainer_menu_category>
              홈
            </SideBarMenuContainer_menu_category>
          </Link>

          <Link
            to="/search"
            onClick={() => onClickClose()}
          >
            <SideBarMenuContainer_menu_category>
              검색
            </SideBarMenuContainer_menu_category>
          </Link>

          <Link
            to="/"
            onClick={() => onClickClose()}
          >
            <SideBarMenuContainer_menu_category>
              오늘은
            </SideBarMenuContainer_menu_category>
          </Link>

          <Link
            to="/custom"
            onClick={() => onClickClose()}
          >
            <SideBarMenuContainer_menu_category>
              맞집 찾기
            </SideBarMenuContainer_menu_category>
          </Link>

          {/* <SideBarMenuContainer_menu_information>
            <span>
              About
            </span>
            <img
              src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/mobile-icon/mobile-right-arrow-grey.svg'
            />
            <img
                src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/mobile-icon/mobile-bottom-arrow-grey.svg'
              />
          </SideBarMenuContainer_menu_information> */}
        </SideBarMenuContainer_menu>

        <SideBarMenuContainer_logoCopyright>
          <Link to='/home'>
            <img src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/mobile-icon/mobile-logo.svg' />
          </Link>
          <span>
            © 2022 - Page by Superduper-India
          </span>
        </SideBarMenuContainer_logoCopyright>
      </SideBarMenuContainer>
    </>
  )
}
