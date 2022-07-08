import styled from '@emotion/styled';

export const WebSideBarLogo = styled.a({
  height: '40%',
  display: 'flex',
});

export const WebSideBarMenuStyle = styled.div({
  backgroundColor: '#fff',
  height: '100vh',
  width: '18.75rem',
  position: 'fixed',
  left: 0,
  zIndex: 1,
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  '& ul': {
    height: '90%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    '& li': {
      color: '#828282',
      fontSize: '1.25rem',
      marginBottom: '2.5rem',
    },
  },
  '& div': {
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #DADADA',
    '& span': {
      color: '#7D3200',
      fontSize: '0.7rem',
    },
  },
});
