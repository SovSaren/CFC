import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SimpleBottomNavigation from './../components/persentation/NavigationButton'
import ButtonAppBar from './../components/containers/Appbar'
import { red } from '@material-ui/core/colors';
import { textAlign } from '@material-ui/system';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridGap: theme.spacing(1),
    width:"100%",
    height:'50vh',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:20,
    backgroundImage:"url('https://www.unicef.org/cambodia/sites/unicef.org.cambodia/files/styles/hero_desktop/public/Education-UN0225343.jpg?itok=GQFbtw_U')",
    backgroundSize:'cover'
  },
  paper: {
     width:"80%",
     marginRight:'auto',
     marginLeft:'auto',
     paddingTop:20,
    
  },
}));

export default function CSSGrid() {
  const classes = useStyles();

  return (
    <div>
      <ButtonAppBar text="School timeline"></ButtonAppBar>
                <Paper className={classes.paper}>
            
                        <Grid container>

                            <Grid item xs={1}>
                            <Button ><AccountCircleIcon style={{fontSize:40,}}></AccountCircleIcon></Button>
                            </Grid>
                            <Grid item xs={3}>
                            <Button style={{color:"red",paddingTop:20,paddingLeft:10,}}><Typography >Name User</Typography></Button>
                            </Grid>
                            
                        </Grid>

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