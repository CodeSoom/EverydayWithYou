import { Link } from 'react-router-dom';

import {
  WebSideBarLogo,
  WebSideBarMenuStyle,
} from '../../styles/WebSideBarMenuStyle';

export default function WebSideBarMenu() {
  return (
    <WebSideBarMenuStyle>
      <WebSideBarLogo href='/'>
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/logo/web-logo.svg'
        />
      </WebSideBarLogo>

      <ul>
        <Link to='/'>
          <li>
            홈
          </li>
        </Link>

        <Link to='/search'>
          <li>
            검색
          </li>
        </Link>

        <Link to='/select'>
          <li>
            오늘은
          </li>
        </Link>

        <Link to='/custom'>
          <li>
            맛집 찾기
          </li>
        </Link>
      </ul>

      <div>
        <span>
          © 2022 - Page by Superduper-India
        </span>
      </div>
    </WebSideBarMenuStyle>
  )
}
