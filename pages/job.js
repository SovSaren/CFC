import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';
import Image from 'next/image'
import { AUGText } from '../components/persentation/texts';
import {Button} from '@material-ui/core';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',
    height:'100%',
    fontSize:'30px',
    backgroundSize:'cover',
    backgroundImage:"url('https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"

  },
  one:{
    padding: theme.spacing(1),
    width:150,
    textAlign:'çenter',
    backgroundColor : 'gray',
    color : '000',
    fontWeight : 600,
    borderRadius : 10, 
    fontSize: 25,
  },
  two:{
   margin:'0',
   textAlign: 'center',
   justifyContent:'center',
   alignItems:'center',
   marginLeft:'auto',
   marginTop:'auto',
   marginRight:'auto',
  },
}));
  

export default function NestedGrid() {
  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment >
          <div className={classes.two}>
           < Image  src="/images/logo_CFC.png" alt="Picture of the author" width={'500vh'} height={'300vh'} />
           <AUGText><h1>CARING FOR CAMBODIA(CFC)</h1>
                    <h2>Pleae choose your job</h2></AUGText>
          </div>
       <Grid container justify="center" spacing={3}>
      
        <Grid item xs={3}>
        <Button className={classes.one}><AUGText>Student</AUGText></Button>
        </Grid>
        <Grid item xs={3}>
         <Button className={classes.one}><AUGText>Teacher</AUGText></Button> 
        </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={9} spacing={1}>
          <FormRow />
        </Grid>
        
      </Grid>
    </div>
  );
}