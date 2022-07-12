import { MobileSlimSideBarStyle } from '../../styles/MobileSlimSideBarStyle';

export default function MobileSlimSideBar({ onClickHamberger }) {
  return (
    <MobileSlimSideBarStyle>
      <a
        onClick={() => onClickHamberger()}
      >
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/hamberger-icon.svg'
        />
      </a>
      <a href='/'>
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/logo/mobile-logo.svg'
        />
      </a>
    </MobileSlimSideBarStyle>
  );
}
