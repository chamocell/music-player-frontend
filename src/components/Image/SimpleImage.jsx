import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    simpleImage: ({ height, width }) => ({
        height: height || 200,
        width: width || 'auto'
    }),
}));

export default function SimpleImage({ image = 'https://netb.tmsimg.com/assets/s10021_lw_h3_ab.png', alt = null, title = null, width, height }) {

    const classes = useStyles({ image, width, height });

    return (
        <React.Fragment>
            <img className={classes.simpleImage} src={image} alt={alt} title={title} />
        </React.Fragment>
    );
}