import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useMediaQuery } from 'react-responsive';

import SideBar from './SideBar';
import Pages from './Pages';

import { loadReviews } from './slice';

import condition from '../fixtures/condition';

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

  const modalEffect = condition(isPc, callSideBarMenu);

  useEffect(() => {
    dispatch(loadReviews());
  }, []);

  return (
    <>
      <SideBar
        isPc={isPc}
        callSideBarMenu={callSideBarMenu}
      />
      <Pages
        isPc={isPc}
        modalEffect={modalEffect}
        reviewFields={reviewFields}
      />
    </>
  );
}
