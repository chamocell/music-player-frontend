import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

const defaultImage = require('./images/default-image.svg');

const theme = {
  palette: {
    primary: {
      //light: '#757ce8',
      main: '#E1251B',
      //dark: '#002884',
      //contrastText: '#fff',
    },
    secondary: {
      //light: '#ff7961',
      main: '#e1251b',
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
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
};

const useStyles = makeStyles(() => ({
  /*   containerCard: {
      background: theme.palette.optional.main,
      backgroundImage: `url(${defaultImage})`,
      backgroundSize: 80,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }, */
  landscape: ({ width, height, bgSize, borderRadius, image }) => ({
    backgroundImage: `url(${image})`,
    position: "relative",
    margin: height * 0.06,
    backgroundSize: bgSize || 230,
    padding: 10,
    border: `1px solid ${theme && theme.palette && theme.palette.primary && theme.palette.primary.main}`,
    borderRadius: borderRadius || 6,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    height: height || 136,
    width: width || 230,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // transition: "0.5s",

    "&::before": {
      content: `''`,
      position: 'absolute',
      zIndex: -1,
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      background: theme && theme.palette && theme.palette.primary && theme.palette.primary.main,
      backgroundImage: `url(${defaultImage})`,
      backgroundSize: 80,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },

    // "&:hover": {
    //   width: width + width * 0.06,
    //   height: height + height * 0.13,
    //   margin: 0
    //   // transition: "0.5s"
    // },
    // "&:focus": {
    //   width: width + width * 0.06,
    //   height: height + height * 0.13,
    //   margin: 0
    //   // transition: "0.5s"
    // }
  }),
  category: {
    height: "80px!important",
    width: "170px!important"
  },
  paper: {
    background: "transparent"
  },
  chip: {
    borderRadius: "12px",
    fontSize: 16,
    textTransform: "lowercase",
    background: theme && theme.palette && theme.palette.primary && theme.palette.primary.main,
    height: "auto",
    padding: 2,
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.5)"
  },
  typography: ({ width }) => ({
    color: "white",
    marginTop: 10,
    width: width || 290
  })
}));

const CardLandscape = ({
  novo = false,
  height = 130,
  width = 230,
  bgSize,
  borderRadius,
  title = false,
  image,
  children,
  focusHandler,
  data,
  clickHandler,
  history,
  match,
  sendToPlay,
  scrollToTop = true,
  isFocusable
}) => {
  const classes = useStyles({ width, height, bgSize, borderRadius, image });
  const [foco, setFoco] = useState(false);

  return (
    <div className={classes.containerCard}>
      <div
        className={`${classes.landscape} ${isFocusable ? "focusable" : ""} ${
          foco ? "active" : ""
          } ${data.href ? classes.category : ""}`}
        tabIndex="0"
        onClick={e => {}}
        onFocus={e => {}}
        onKeyUp={e => {}}
      >
        <Paper elevation={0} className={classes.paper}>
          {novo && <Chip label="NOVO" className={classes.chip} />}
        </Paper>
        {children}
      </div>
      {title && (
        <Typography className={classes.typography} variant="body1" noWrap>
          {title}
        </Typography>
      )}
    </div>
  );
};
export default CardLandscape;
