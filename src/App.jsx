import { useSelector } from 'react-redux';

import { useMediaQuery } from 'react-responsive';

import SideBar from './SideBar';
import Pages from './Pages';

import {
  getReviews,
  setReviews,
} from './reviews';

import { useEffect } from 'react';

export default function App() {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });

  const callSideBarMenu = useSelector((state) => (
    state.callSideBarMenu
  ));

  useEffect(() => {
    getReviews();
    setReviews({});
  }, []);

  return (
    <>
      <input type="text" />
      <SideBar
        isPc={isPc}
        callSideBarMenu={callSideBarMenu}
      />
      <Pages
        isPc={isPc}
        callSideBarMenu={callSideBarMenu}
      />
    </>
  );
}
