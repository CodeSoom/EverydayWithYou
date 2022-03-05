// import styled from '@emotion/styled';

import MobileSideBarMenu from './MobileSideBarMenu';
import MobileSideBarLeft from './MobileSideBarLeft';

import { useDispatch } from 'react-redux';

import {
  setSideBarMenu,
  removeSideBarMenu,
} from '../../actions';

export default function MobileSideBar({ callMenu }) {
  const dispatch = useDispatch();

  function handleClickHamberger() {
    dispatch(setSideBarMenu());
  }

  function handleClickClose() {
    dispatch(removeSideBarMenu());
  }

  return (
    <>
      {callMenu == 'okay' ?
        <MobileSideBarMenu
          onClickClose={handleClickClose}
        />
        : <MobileSideBarLeft
          onClickHamberger={handleClickHamberger}
        />
      }
    </>
  )
}
