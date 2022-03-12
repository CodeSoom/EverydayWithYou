import styled from '@emotion/styled';

import facepaint from 'facepaint'

import TopSearchBar from './TopSearchBar';
import TopNavBar from './TopNavBar';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const Top = styled.div(() => mq({
  position: 'fixed',
  left: ['15.5vw', '18.75rem', '18.75rem'],
  right: 0,
  top: 0,
  zIndex: 1,
}));

export default function TopBar({ pointFont }) {
  return (
    <Top>
      <TopSearchBar />
      <TopNavBar
        pointFont={pointFont}
      />
    </Top>
  )
}
