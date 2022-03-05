import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const MobileSideBarMenuContainer = styled.div({
  backgroundColor: '#fff',
  maxWidth: '100%',
  height: '100vh',
  width: '73vw',
  position: 'fixed',
  top: 0,
  zIndex: '1',
  padding: '3%',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const MobileSideBarMenuContainer_close = styled.div({
  width: '100%',
  '& img': {
    width: '10vw',
  },
})

const MobileSideBarMenuContainer_menu = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
const MobileSideBarMenuContainer_menu_category = styled.li({
  color: '#828282',
  fontSize: '3.75vw',
  marginBottom: '6vh',
})
const MobileSideBarMenuContainer_menu_information = styled.button({
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
})

const MobileSideBarMenuContainer_logoCopyright = styled.div({
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

// ToDo 각 메뉴 누르면 해당 페이지로 이동하면서 사이드바 끄기
export default function MoblieSideBarMenu({ onClickClose }) {
  return (
    <>
      <MobileSideBarMenuContainer>
        <MobileSideBarMenuContainer_close>
          <button
            type='button'
            onClick={() => onClickClose()}
          >
            <img
              src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/mobile-icon/mobile-close-icon.svg'
            />
          </button>
        </MobileSideBarMenuContainer_close>

        <MobileSideBarMenuContainer_menu>
          <Link to="/home">
            <MobileSideBarMenuContainer_menu_category>
              홈
            </MobileSideBarMenuContainer_menu_category>
          </Link>

          <Link to="/search">
            <MobileSideBarMenuContainer_menu_category>
              검색
            </MobileSideBarMenuContainer_menu_category>
          </Link>

          <Link to="/">
            <MobileSideBarMenuContainer_menu_category>
              오늘은
            </MobileSideBarMenuContainer_menu_category>
          </Link>

          <Link to="/custom">
            <MobileSideBarMenuContainer_menu_category>
              맞집 찾기
            </MobileSideBarMenuContainer_menu_category>
          </Link>

          <MobileSideBarMenuContainer_menu_information>
            <span>
              About
            </span>
            <img
              src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/mobile-icon/mobile-right-arrow-grey.svg'
            />
            {/* <img
                src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/mobile-icon/mobile-bottom-arrow-grey.svg'
              /> */}
          </MobileSideBarMenuContainer_menu_information>
        </MobileSideBarMenuContainer_menu>

        <MobileSideBarMenuContainer_logoCopyright>
          <Link to='/home'>
            <img src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/mobile-icon/mobile-logo.svg' />
          </Link>
          <span>
            © 2022 - Page by Superduper-India
          </span>
        </MobileSideBarMenuContainer_logoCopyright>
      </MobileSideBarMenuContainer>
    </>
  )
}
