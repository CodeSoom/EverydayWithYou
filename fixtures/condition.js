const condition = (isPc, callSideBarMenu) => {
  return !isPc && callSideBarMenu === true ?
    'darker-background' : '';
};

export default condition;
