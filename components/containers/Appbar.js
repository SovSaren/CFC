import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChatBubbleTwoToneIcon from '@material-ui/icons/ChatBubbleTwoTone';
import {Link} from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 12,
    backgroundColor:"red"
    
  },
  title: {
    flexGrow: 12,
    fontFamily:"Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
  },
}));

export default function ButtonAppBar({text}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h4" className={classes.title} style={{marginLeft:300}}>
            {text}
         </Typography>
          
          

          <Typography>
                    <Link href="#" style={{color:'black',width:50,height:50,}}>
                      <  ChatBubbleTwoToneIcon style={{color:'white',width:40,height:40,}}></ ChatBubbleTwoToneIcon>
                    </Link>
                </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}