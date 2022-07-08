import { useSelector } from 'react-redux';

import { useMediaQuery } from 'react-responsive';

import SideBar from './SideBar';
import Pages from './Pages';

export default function App() {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });

  const callSideBarMenu = useSelector((state) => (
    state.callSideBarMenu
  ))

  return (
    <>
      <SideBar
        isPc={isPc}
        callSideBarMenu={callSideBarMenu}
      />
      <Pages
        isPc={isPc}
        callSideBarMenu={callSideBarMenu}
      />
    </>
  )
}
