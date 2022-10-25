import styled from '@emotion/styled';

export const MobileSlimSideBarStyle = styled.div({
  backgroundColor: '#fff',
  padding: '3% 0',
  height: '100vh',
  width: '15.5vw',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& img': {
    width: '10vw',
  },
});
