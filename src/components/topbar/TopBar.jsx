import styled from '@emotion/styled';

import TopSearchBar from './TopSearchBar';
import TopNavBar from './TopNavBar';

import mq from '../../shared/media-query';

const Top = styled.div(() => mq({
  position: 'fixed',
  left: ['15.5vw', '18.75rem', '18.75rem'],
  right: 0,
  top: 0,
  zIndex: 1,
}));

export default function TopBar({
  modalEffect, pointFont,
}) {
  return (
    <Top className={modalEffect}>
      <TopSearchBar />
      <TopNavBar pointFont={pointFont} />
    </Top>
  );
}
