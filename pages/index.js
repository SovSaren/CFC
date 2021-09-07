import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';
import Image from 'next/image'
import { AUGText } from '../components/persentation/texts';
import {Button, Typography} from '@material-ui/core';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import styles from './../styles/choosejob.module.css';
import Mantis from './../components/persentation/text/Mantis Rumble_PersonalUseOnly';
import SchoolIcon from '@material-ui/icons/School';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Link from 'next/dist/client/link';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Label } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  item :{
    color:'blue',   
    marginLeft:100,
    marginRight:100,
    fontSize:100,
  },
  
}));
  

export default function NestedGrid() {
  const classes = useStyles();
    return (
      <div className={styles.body}>
        <Grid className={styles.form}>
        <Grid  style={{marginLeft:50,marginRight:50,}} >
          <Typography  style={{textAlign:'center',paddingTop:30,fontSize:60}}>
            <Mantis>Create Account</Mantis>
          </Typography>
        </Grid>
        <p style={{textAlign:'center',marginTop:-30,fontSize:30}}>welcome to (cfc)study online class</p>
        <div className={styles.icons} >
            <BottomNavigation showLabels style={{marginTop:100,backgroundColor:'rgb(177, 235, 240)'}}>
              <BottomNavigationAction className={classes.item}  label="STUDENT" Link href="/register" icon={<AssignmentIndIcon style={{width:100,height:100,}}/>} /> 
              <BottomNavigationAction className={classes.item}   label="TEACHER" icon={<SchoolIcon style={{width:100,height:100,}}/>} /> 
            </BottomNavigation>
        </div>

        </Grid>
        
      </div>
  );
}