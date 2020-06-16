import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  chip: ({ color, height }) => ({
    display: 'inline-flex',
    margin: 0,
    height: height || 25,
    background: color || theme.palette.secondary.main,
    color: 'white',
    textTransform: 'uppercase',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    }
  })
}));

export default function ChipContainer({ title, color, height }) {
  const classes = useStyles({ title, color, height });

  return (
    <React.Fragment>
      <Chip className={classes.chip} label={title} />
    </React.Fragment>
  );
}
