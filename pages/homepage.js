import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';
import Image from 'next/image'
import { AUGText } from '../components/persentation/texts';
import { CallMissedSharp } from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme) => ({

  
    logo:{
      margin:'0',
      textAlign: 'center',
      justifyContent:'center',
      alignItems:'center',
      marginLeft:'auto',
      marginTop:'auto',
      marginRight:'auto',
    },

    start:{
      width:150,
      textAlign:'çenter',
      backgroundColor : 'gry',
      padding : 7,
      color : '000',
      fontWeight : 800,
      borderRadius : 10, 
      fontSize: 20,
    },

    root: {
      flexGrow: 1,
      fontSize:'30px',
      

  
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));
export default function HomePage(){
    const classes = useStyles();
   
    function FormRow() {
      return (
        <React.Fragment >
          <div className={classes.logo}>
 <Image  src="/images/logo_CFC.png" alt="Picture of the author" width={'500vh'} height={'300vh'} />
 <AUGText> <h1>CARING FOR CAMBODIA(CFC)</h1></AUGText>
  </div>
         <Grid container justify="center" spacing={6}>
         <Grid item xs={1} > 
           
           <button className={classes.start}><AUGText>Start</AUGText></button>
          </Grid>
          </Grid>
        </React.Fragment>
      );
    }
    return (
      <div className={classes.root} >
        <Grid container spacing={1}>
          <Grid container item xs={9} spacing={1}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    );
}