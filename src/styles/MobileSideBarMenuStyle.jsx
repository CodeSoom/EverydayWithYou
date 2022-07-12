import styled from '@emotion/styled';

export const MobileSideBarMenuStyle = styled.div({
  backgroundColor: '#fff',
  padding: '3%',
  height: '100vh',
  width: '73vw',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1,
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& button': {
    textAlign: 'left',
    width: '100%',
    '& img': {
      width: '10vw',
    },
  },
  '& ul': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& li': {
      color: '#828282',
      fontSize: '3.75vw',
      marginBottom: '6vh',
    },
  },
  '& div': {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTop: 'solid 1px #828282',
    '& img': {
      width: '44vw',
    },
    '& span': {
      color: '#7D3200',
      fontSize: '2vw',
      paddingBottom: '2vh',
    },
  },
});
