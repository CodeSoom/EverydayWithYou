import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const WebSideBarContainer = styled.div({
  backgroundColor: '#fff',
  maxWidth: '100%',
  height: '100vh',
  width: '18.75rem',
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  zIndex: 3,

  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
})

const WebSideBarContainer_logo = styled.div({
  margin: '2.875rem 0',
  height: '10%',
})

const WebSideBarContainer_menu = styled.ul({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90%',
})

const WebSideBarContainer_menu_category = styled.li({
  color: '#828282',
  fontSize: '1.25rem',
  marginBottom: '2.5rem',
})

const WebSideBarContainer_menu_information = styled.button({
  display: 'flex',
  alignItems: 'center',
  '& span': {
    color: '#828282',
    fontSize: '1.25rem',
    marginRight: '1rem',
  },
})

const WebSideBarContainer_copyright = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '10%',
  borderTop: '1px solid #DADADA',
  '& span': {
    fontSize: '0.7rem',
    color: '#7D3200',
  },
})

export default function SideBar() {
  return (
    <WebSideBarContainer>
      <Link to='/home'>
        <WebSideBarContainer_logo>
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/logo.svg'
          />
        </WebSideBarContainer_logo>
      </Link>

      <WebSideBarContainer_menu>
        <Link to="/home">
          <WebSideBarContainer_menu_category>
            홈
          </WebSideBarContainer_menu_category>
        </Link>

        <Link to="/search">
          <WebSideBarContainer_menu_category>
            검색
          </WebSideBarContainer_menu_category>
        </Link>

        <Link to="/">
          <WebSideBarContainer_menu_category>
            오늘은
          </WebSideBarContainer_menu_category>
        </Link>

        <Link to="/custom">
          <WebSideBarContainer_menu_category>
            맞집 찾기
          </WebSideBarContainer_menu_category>
        </Link>

        <WebSideBarContainer_menu_information>
          <span>
            About
          </span>
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/right-arrow-grey.svg'
          />
          {/* <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/bottom-arrow-grey.svg'
          /> */}
        </WebSideBarContainer_menu_information>
      </WebSideBarContainer_menu>

      <WebSideBarContainer_copyright>
        <span>
          © 2022 - Page by Superduper-India
        </span>
      </WebSideBarContainer_copyright>
    </WebSideBarContainer>
  )
}
