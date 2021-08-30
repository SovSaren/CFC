import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';
import Image from 'next/image'
import { AUGText } from '../components/persentation/texts';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',
    height:'100%',
    fontSize:'30px',

  },
  singup:{
    width:150,
    textAlign:'çenter',
    backgroundColor : 'gray',
    padding : 0,
    color : '000',
    fontWeight : 800,
    borderRadius : 30, 
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
      <React.Fragment>
          <div className={classes.two}>
           < Image  src="/images/logo_CFC.png" alt="Picture of the author" width={'500vh'} height={'300vh'} />
           <AUGText> <h1>CARING FOR CAMBODIA(CFC)</h1></AUGText>
          </div>
       <Grid container justify="center" spacing={3}>
      
        <Grid item xs={3}>
         <Button className={classes.singup} ><AUGText>Sing Up</AUGText></Button>
        </Grid>
        <Grid item xs={3}>
         <Button className={classes.singup} ><AUGText>Login</AUGText></Button>
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