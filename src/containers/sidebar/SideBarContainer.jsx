import { useDispatch } from 'react-redux';

import SideBar from '../../components/sidebar/SideBar';
import SideBarLeft from '../../components/sidebar/SideBarLeft';
import SideBarMenu from '../../components/sidebar/SideBarMenu';

import {
  setSideBarMenu,
  removeSideBarMenu,
} from '../../slice';

export default function SideBarContainer({ isPc, callMenu }) {
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
        <SideBar /> :
        callMenu == 'okay' ?
          <SideBarMenu
            onClickClose={handleClickClose}
          />
          : <SideBarLeft
            onClickHamberger={handleClickHamberger}
          />
      }
    </>
  )
}
