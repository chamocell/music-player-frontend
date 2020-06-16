import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = {
  palette: {
    primary: {
      //light: '#757ce8',
      main: '#47536b'
      //dark: '#002884',
      //contrastText: '#fff',
    },
    secondary: {
      //light: '#ff7961',
      main: '#e1251b'
      //dark: '#ba000d',
      //contrastText: '#000',
    },
    grayColor: {
      main: '#212224'
    },
    fontColorPrimary: {
      main: '#99CBFF'
    },
    colorActive: {
      main: '#47536b'
    }
  },
  shadowBox: {
    generic: '0 3px 5px 2px rgba(0, 0, 0, .4)'
  },
  typography: {
    //fontFamily: ['Roboto'].join(','),
    subtitle1: {
      fontSize: 12
    },
    body1: {
      fontWeight: 500
    },
    button: {
      fontStyle: 'italic'
    }
  }
};

const useStyles = makeStyles(() => ({
  cardSearch: ({ width, height, borderRadius }) => ({
    background: theme.palette.grayColor.main,
    border: `1px solid ${theme.palette.primary}`,
    height: height || 230,
    width: '280px',
    margin: 10,
    borderRadius: borderRadius || 6,
    overflow: 'hidden'

    // "&:hover": {
    // 	background: theme.palette.colorActive,
    // 	width: width + width * 0.06,
    // 	height: height + height * 0.06,
    // 	margin: 0
    // },
    // "&:focus": {
    // 	background: theme.palette.colorActive,
    // 	width: width + width * 0.06,
    // 	height: height + height * 0.06,
    // 	marginTop: 0,
    // }
  }),
  cardSearchImage: ({ bgSize, image }) => ({
    backgroundImage: `url(${
      image || 'https://i.scdn.co/image/ab67616d00001e028b2c42026277efc3e058855b'
    })`,
    position: 'relative',
    backgroundSize: bgSize || 'cover',
    width: '100%',
    height: 160,
    boxShadow: theme.shadowBox.generic,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }),
  cardSearchContent: {
    padding: 10
  },
  title: ({ width }) => ({
    color: 'white',
    fontSize: 16
  }),
  subTitle: ({ width }) => ({
    color: theme.palette.fontColorPrimary.main,
    width: width,
    fontSize: 13
  })
}));

const CardSearch = ({
  width,
  height,
  bgSize,
  borderRadius,
  title = false,
  image,
  children,
  subTitle
}) => {
  const classes = useStyles({ width, height, bgSize, borderRadius, image, subTitle });

  return (
    <div className={`${classes.cardSearch}`}>
      <div className={`${classes.cardSearchImage}`}>{children}</div>
      <div className={classes.cardSearchContent}>
        {title && (
          <Typography className={classes.title} variant="body1" noWrap>
            {title}
          </Typography>
        )}
        {subTitle && (
          <Typography className={classes.subTitle} variant="body2" noWrap>
            {subTitle}
          </Typography>
        )}
      </div>
    </div>
  );
};
export default CardSearch;
