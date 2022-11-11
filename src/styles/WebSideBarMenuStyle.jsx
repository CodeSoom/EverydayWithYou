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
  top: 0,
  left: 0,
  zIndex: 3,
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
      position: 'relative',
      color: '#828282',
      fontSize: '1.25rem',
      marginBottom: '2.5rem',
      ': hover': {
        color: '#000',
        transition: 'color 200ms ease',
      },
      ':hover:before': {
        transform: 'scaleX(1)',
      },
      '&:before': {
        left: 0,
        bottom: 0,
        width: '100%',
        height: '2px',
        background: '#000',
        transform: 'scaleX(0)',
        content: '""',
        position: 'absolute',
        transition: 'transform .3s ease',
      },
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
