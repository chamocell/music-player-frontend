import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  plans: ({ width, height, bgSize, borderRadius, image }) => ({
    backgroundImage: `url(${
      image ||
      'http://clarovideocdn5.clarovideo.net/pregeneracion//cms/images/202001/75478_Default_Passangers-now_16154434.jpg'
    })`,
    position: 'relative',
    margin: height * 0.06,
    backgroundSize: bgSize || 290,
    padding: 10,
    border: `1px solid ${
      theme && theme.palette && theme.palette.primary && theme.palette.primary.main
    }`,
    borderRadius: borderRadius || 6,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    height: height || 145,
    width: width || 290,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    '&:hover': {
      width: width + width * 0.06,
      height: height + height * 0.13,
      backgroundSize: bgSize + bgSize * 0.13,
      margin: 0
    },
    '&:focus': {
      width: width + width * 0.13,
      height: height + height * 0.13,
      backgroundSize: bgSize + bgSize * 0.13,
      marginTop: 0
    }
  }),
  typography: ({ width }) => ({
    color: 'white',
    marginTop: 10,
    width: width || 290
  })
}));

const CardPlans = ({
  width,
  height,
  bgSize,
  borderRadius,
  title = false,
  image,
  children
}) => {
  const classes = useStyles({ width, height, bgSize, borderRadius, image });

  return (
    <React.Fragment>
      <div className={`${classes.plans}`}>{children}</div>
      {title && (
        <Typography className={classes.typography} variant="body1" noWrap>
          {title}
        </Typography>
      )}
    </React.Fragment>
  );
};
export default CardPlans;
