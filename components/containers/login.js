import React from 'react';
import { Grid,Paper, Typography ,Avatar,TextField,Button,Link} from '@material-ui/core';
import styles from './../../styles/signin.module.css'
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import Mantis from './../persentation/text/Mantis Rumble_PersonalUseOnly';
import { fireAuth } from './../../services/firebase';
import router, { useRouter } from "next/router";



const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    btn:{
        marginTop:10,
    }
  });
   

export default function Login(){
    const classes = useStyles();
    const [error, setError] = React.useState("");
    const handleUserSignIn = (e) =>{
        e.preventDefault();
       const {email,password} = e.target.elements;
       fireAuth.signInWithEmailAndPassword(email.value,password.value)
       .then((res) =>{
           console.log("Successfully");
           router.push('/schooltimeline')
       }).catch((err)=>{
           console.error(err)
           setError(err.message);
       })
    }
  
    return(
        <div  onSubmit={ handleUserSignIn }>
            <Grid  style={{marginLeft:50,marginRight:50,}} >
                <Grid align='center' className={styles.grid}>
                    <Avatar style={{backgroundColor:'#3cd4a3'}}>< AlternateEmailOutlinedIcon/ ></Avatar>
                    <h1>Sign In</h1>  
                </Grid>
                <TextField 
                    label = 'Email' 
                    name = "email" 
                    placeholder='Enter eamil' 
                    fullWidth required>
                </TextField>
                <TextField 
                    label = 'Password' 
                    type='password' 
                    name="password"
                    placeholder='Enter password' 
                    fullWidth required
                ></TextField>
                <FormControlLabel 
                        control={
                            <Checkbox
                            name="checkedB"
                            color="primary"
                            >
                            </Checkbox>
                        }
                        label="Remember me"
                        style={{marginTop:20}}
                >
                </FormControlLabel>
                <Button  type="submit"  fullWidth
                className={classes.btn} style={{fontSize:23}} className={styles.btn } ><Mantis >Sign In</Mantis></Button>
                <Typography  style={{marginTop:20}}>
                    <Link href="#">
                        Forgot password ?

                    </Link>
                </Typography>
                <Typography style={{marginTop:10}} >
                    Do you have an accounnt?
                    <Link href="/">
                      Sign up

                    </Link>
                </Typography>

            </Grid>
            
        </div>

    )
}