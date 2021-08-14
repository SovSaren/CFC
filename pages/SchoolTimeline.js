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
import { red } from '@material-ui/core/colors';
import { textAlign } from '@material-ui/system';



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridGap: theme.spacing(1),
    width:"90%",
    height:'60vh',
    marginLeft:'auto',
    marginRight:'auto',
  },
  paper: {
     width:"90%",
     marginRight:'auto',
     marginLeft:'auto',
  },
}));

export default function CSSGrid() {
  const classes = useStyles();

  return (
    <div>
      
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
                              <Image  src="/images/news.jpg" alt="Picture of the author" width={1100} height={600} />
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