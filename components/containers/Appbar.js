import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 10,
    
  },
  title: {
    flexGrow: 1,
    fontFamily:"Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
  },
}));

export default function ButtonAppBar({text}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
           <h5>{text}</h5>
         </Typography>
          
          <Button color="inherit" >< AccountCircleIcon style={{width:50,height:50}}></AccountCircleIcon></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}