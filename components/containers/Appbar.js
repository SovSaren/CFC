import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChatBubbleTwoToneIcon from '@material-ui/icons/ChatBubbleTwoTone';
import {Link} from '@material-ui/core';
import Mantis from './../persentation/text/Mantis Rumble_PersonalUseOnly';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 12,
    
  },
  title: {
    flexGrow: 12,
    fontFamily:"Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    color:'black',
  },
  appbar:{
    backgroundColor:"#f2e1f3",
    height:80,
  }
}));

export default function ButtonAppBar({text}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appbar}>
        <Toolbar>
          <p  className={classes.title} style={{marginLeft:300,fontSize:50,}}>
            <Mantis>{text}</Mantis>
         </p>
          
          

          <Typography>
                    <Link href="/comment" style={{color:'red',width:50,height:50,}}>
                      <  ChatBubbleTwoToneIcon style={{color:'#4492eb',width:50,height:50}}></ ChatBubbleTwoToneIcon>
                    </Link>
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}