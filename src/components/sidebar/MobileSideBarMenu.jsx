import { Link } from 'react-router-dom';

import {
  MobileSideBarMenuStyle,
} from '../../styles/MobileSideBarMenuStyle';

export default function MobileSideBarMenu({ onClickClose }) {
  return (
    <>
      <MobileSideBarMenuStyle>
        <button
          type='button'
          onClick={() => onClickClose()}
        >
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/mobile-close-icon.svg'
          />
        </button>

        <ul>
          <Link
            to='/'
            onClick={() => onClickClose()}
          >
            <li>
              홈
            </li>
          </Link>

          <Link
            to='/search'
            onClick={() => onClickClose()}
          >
            <li>
              검색
            </li>
          </Link>

          <Link
            to='/select'
            onClick={() => onClickClose()}
          >
            <li>
              오늘은
            </li>
          </Link>

          <Link
            to='/custom'
            onClick={() => onClickClose()}
          >
            <li>
              맛집 찾기
            </li>
          </Link>
        </ul>

        <div>
          <Link
            to='/'
            onClick={() => onClickClose()}
          >
            <img src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/mobile-logo.svg' />
          </Link>
          <span>
            © 2022 - Page by Superduper-India
          </span>
        </div>
      </MobileSideBarMenuStyle>
    </>
  )
}
