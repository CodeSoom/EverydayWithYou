import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const SideBarLayout = styled.div({
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

const SideBar_logo = styled.div({
  margin: '2.875rem 0',
  height: '10%',
})

const SideBar_menu = styled.ul({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90%',
})

const SideBar_menu_category = styled.li({
  color: '#828282',
  fontSize: '1.25rem',
  marginBottom: '2.5rem',
})

const SideBar_copyright = styled.div({
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

export default function WebSideBarMenu() {
  return (
    <SideBarLayout>
      <Link to='/home'>
        <SideBar_logo>
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/logo.svg'
          />
        </SideBar_logo>
      </Link>

      <SideBar_menu>
        <Link to="/home">
          <SideBar_menu_category>
            홈
          </SideBar_menu_category>
        </Link>

        <Link to="/search">
          <SideBar_menu_category>
            검색
          </SideBar_menu_category>
        </Link>

        <Link to="/">
          <SideBar_menu_category>
            오늘은
          </SideBar_menu_category>
        </Link>

        <Link to="/custom">
          <SideBar_menu_category>
            맛집 찾기
          </SideBar_menu_category>
        </Link>
      </SideBar_menu>

      <SideBar_copyright>
        <span>
          © 2022 - Page by Superduper-India
        </span>
      </SideBar_copyright>
    </SideBarLayout>
  )
}
