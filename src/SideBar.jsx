import { useDispatch } from 'react-redux';

import WebSideBarMenu from './components/sidebar/WebSideBarMenu';
import MobileSideBar from './components/sidebar/MobileSideBar';
import MobileSideBarMenu from './components/sidebar/MobileSideBarMenu';

import {
  setSideBarMenu,
  removeSideBarMenu,
} from './slice';

export default function SideBarMenu({ isPc, callSideBarMenu }) {
  const dispatch = useDispatch();

  function handleClickHamberger() {
    dispatch(setSideBarMenu());
  }

  function handleClickClose() {
    dispatch(removeSideBarMenu());
  }

  return (
    <>
      {isPc ?
        <WebSideBarMenu /> :
        callSideBarMenu == 'okay' ?
          <MobileSideBarMenu
            onClickClose={handleClickClose}
          />
          : <MobileSideBar
            onClickHamberger={handleClickHamberger}
          />
      }
    </>
  )
}
