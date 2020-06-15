import React from 'react';

// Material Components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  globalError: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentError: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  image: {
    height: 140,
    marginBottom: 15
  },
  children: {
    color: '#a5aab1',
    fontSize: 23,
    marginTop: 5,
    fontWeight: 300
  },
  row: { 
    display: 'flex', 
    flexDirection: 'column' 
  },
  notFound: { 
    fontSize: 30 
  }
}));

const Message = ({ children, height, status }) => {
  const classes = useStyles({ children, height, status });
  const image =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLpQJ50USYZDEUyOESNxZwrsDaJ5h8Qa04oxQMU1fKQmw4wD5-&usqp=CAU';
  return (
    <Grid container spacing={0} className={`${classes.globalError}`}>
      <Grid item xs={4} className={classes.contentError}>
        <img src={image} alt="popcorn icon" className={classes.image} />
        <p className={classes.row}>
          <strong className={classes.notFound}>{status ? status : '404'}</strong>
          <span className={classes.children}>
            {children ? children : 'No encontrado'}
          </span>
        </p>
      </Grid>
    </Grid>
  );
};

export default Message;
