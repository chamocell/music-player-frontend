import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const imageDefault = require('./images/placeholder-actor.png');

const useStyles = makeStyles((theme) => ({
  containerCardArtist: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  CardArtist: ({ width, height, bgSize, borderRadius, image }) => ({
    backgroundImage: `url(${image ? image : imageDefault})`,
    position: 'relative',
    margin: height * 0.06,
    backgroundSize: bgSize || 'cover',
    backgroundPosition: 'center',
    border: `1px solid ${theme?.palette?.primary?.main}`,
    borderRadius: borderRadius || '50%',
    height: height || 50,
    width: width || 50

    // "&:hover": {
    //   width: width + width * 0.06,
    //   height: height + height * 0.06,
    //   backgroundSize: bgSize + bgSize * 0.13,
    //   border: `3px solid ${theme?.palette?.primary?.main}`,
    //   margin: 0
    // },
    // "&:focus": {
    //   width: width + width * 0.13,
    //   height: height + height * 0.13,
    //   backgroundSize: bgSize + bgSize * 0.13,
    //   border: `3px solid ${theme?.palette?.primary?.main}`,
    //   margin: 0
    // }
  }),
  infoCard: {
    padding: '50px 15px'
  },
  typographyTitle: ({ width }) => ({
    color: 'black',
    marginTop: 5,
    fontSize: 30,
    textAlign: 'left',
    width: width,
    fontWeight: 600
  }),
  typographyRol: ({ width }) => ({
    color: '#9f9f9f',
    textTransform: 'uppercase',
    fontSize: 17,
    textAlign: 'left',
    width: width,
    fontWeight: 300
  })
}));

const CardArtist = ({
  width,
  height,
  bgSize,
  borderRadius,
  title,
  image,
  children,
  infoTalent,
  focusHandler,
  data,
  clickHandler,
  history,
  sendToPlay,
  isFocusable
}) => {
  const classes = useStyles({ width, height, bgSize, borderRadius, image });

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      style={{ marginTop: '20px' }}
    >
      <div
        className={`${classes.CardArtist} ${isFocusable ? 'focusable' : ''}`}
        tabIndex="0"
        onClick={(e) => {}}
        data-sn-right={`#i .focusable`}
        data-sn-left={`#i .focusable`}
        onFocus={(e) => {}}
        onKeyUp={(e) => {}}
      >
        {children}
      </div>
      <div className={classes.infoCard}>
        {infoTalent && (
          <Typography className={classes.typographyRol} variant="body2" noWrap>
            {infoTalent}
          </Typography>
        )}
        <Typography className={classes.typographyTitle} variant="body1">
          {title}
        </Typography>
      </div>
    </Grid>
  );
};
export default CardArtist;
