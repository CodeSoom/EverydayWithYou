import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useMediaQuery } from 'react-responsive';

import SideBar from './SideBar';
import Pages from './Pages';

import { loadReviews } from './slice';

export default function App() {
  const dispatch = useDispatch();

  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });

  const callSideBarMenu = useSelector((state) => (
    state.callSideBarMenu
  ));

  const reviewFields = useSelector((state) => (
    state.reviewFields
  ));

  useEffect(() => {
    dispatch(loadReviews());
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
        reviewFields={reviewFields}
      />
    </>
  );
}
