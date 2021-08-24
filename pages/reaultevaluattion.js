import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:'blue',
    width:'100%',
    height:'100%',
    
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  one:{
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
  

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
       <Grid container justify="center" spacing={3}>
       <Grid item xs={12} > 
          <Paper className={classes.one}>January(2021-2022)</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.one}>Subjects:</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.one}>sumary:</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>Total Score:</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>Rank:</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>Assessment:</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>Teacher Comments:</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>Attitude,Behavior and Effort:</Paper>
        </Grid>
       </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
        
      </Grid>
    </div>
  );
}