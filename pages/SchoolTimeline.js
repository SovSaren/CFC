import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SimpleBottomNavigation from './../components/persentation/buttonlikesharecomment';
import ButtonAppBar from './../components/containers/Appbar';
import { red } from '@material-ui/core/colors';
import { textAlign } from '@material-ui/system';
import { fireAuth } from "../services/firebase";
import router, { useRouter } from "next/router";




const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridGap: theme.spacing(1),
    width:"90%",
    height:'60vh',
    marginLeft:'auto',
    marginRight:'auto',
    backgroundImage:"url('https://www.unicef.org/cambodia/sites/unicef.org.cambodia/files/styles/hero_mobile/public/Education-UN0225343.jpg?itok=n7Kj69MD')",
    backgroundSize:'cover',
  },
  paper: {
     width:"90%",
     marginRight:'auto',
     marginLeft:'auto',
  },
  accoun:{
    width:'30%',
    height:'70px',
    marginLeft:50,
    display:'inlineBlock'
},
}));

export default function CSSGrid() {
  const classes = useStyles();
  const handleSignOut =()=>{
    fireAuth.signOut()
    .then(()=>{
        router.push('/')
    }).catch(()=>{
        console.error(err)
    })
}

  return (
    <div> 
        <ButtonAppBar text="School Timeline"></ButtonAppBar>
      
                <Paper className={classes.paper}>
                      <div className={classes.accoun} >
                       <Button className={classes.button}><AccountCircleIcon style={{color: 'blue',height:50,width:50,marginTop:20,float:'left'}}/></Button>
                       <Button className={classes.button}><Typography  style={{paddingLeft:10,fontSize:18}} > User Name</Typography></Button>
                      <Typography style={{marginTop:-26,paddingLeft:90,fontSize:13,color:'red'}} > 4d</Typography>
                </div>

                        <Grid   style={{marginTop:30,}}>
                            <Typography style={{marginLeft:20,}}>Caring for Cambodia students wash their hands and splash a bit of fresh water on their faces in the early morning.
                            Our hand washing stations are one of the tent poles of our Health Education program, which includes early lessons on teeth brushing and hand washing. Lessons that create the building blocks for healthy, happy students.</Typography>
                        </Grid>
                        <Paper elevation={1} style={{marginTop:20, }}>
                          <Grid className={classes.container} >
                              
                          </Grid>
                        </Paper>
                        <Paper elevation={6}>
                            <Grid style={{marginTop:10,}}>
                                <SimpleBottomNavigation></SimpleBottomNavigation>

                            </Grid>
                        </Paper>
                        
                 </Paper>
    </div>
  );
}