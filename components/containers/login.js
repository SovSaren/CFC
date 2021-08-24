import React from 'react';
import { Grid,Paper, Typography ,Avatar,TextField,Button,Link} from '@material-ui/core';
import styles from './../../styles/signin.module.css'
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';



const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
   

export default function Login(){
    const classes = useStyles();
  
    return(
        <div>
            <Grid  style={{marginLeft:50,marginRight:50,}} >
                <Grid align='center' className={styles.grid}>
                    <Avatar style={{backgroundColor:'#3cd4a3'}}>< AlternateEmailOutlinedIcon/ ></Avatar>
                    <h1>Sign In</h1>  
                </Grid>
                <TextField label = 'User name' name = 'Username' placeholder='Enter username' fullWidth required></TextField>
                <TextField label = 'Password' placeholder='Enter password' fullWidth required></TextField>
                <FormControlLabel 
                        control={
                            <Checkbox
                            name="checkedB"
                            color="primary"
                            >

                            </Checkbox>
                        }
                        label="Remember me"
                >
                </FormControlLabel>
                <Button type="submit" color="blue" color='paimary' variant='contained' fullWidth >Sign In</Button>
                <Typography>
                    <Link href="#">
                        Forgot password ?

                    </Link>
                </Typography>
                <Typography >
                    Do you have an accounnt?
                    <Link href="/">
                      Sign up

                    </Link>
                </Typography>


                
            </Grid>
            
        </div>

    )
}