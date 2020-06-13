import React  from 'react'

// Material Components
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const Message = ({ classes, children, height, status}) => {

  const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLpQJ50USYZDEUyOESNxZwrsDaJ5h8Qa04oxQMU1fKQmw4wD5-&usqp=CAU';
  return (
    <Grid container spacing={0} className={`${classes.globalError}`}>
        <Grid item xs={4} className={classes.contentError} style={{ height: height }}>
            <img src={image} alt="popcorn icon" className={classes.image} />
            <p style={{ display: 'flex', flexDirection: 'column' }}>
                <strong style={{ fontSize: 30 }}>
                 {status ? status : '404'}
                </strong>
                <span style={{ color: "#a5aab1", fontSize: 23, marginTop: 5, fontWeight: 300 }}>
                {children ? children : 'No encontrado'}
                </span>
            </p>
        </Grid>
    </Grid>
  )
};

const styles = () => ({
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
  }
});
export default withStyles(styles)(Message);