import React from 'react';
import { Grid,Paper, Typography ,Avatar,TextField,Button,Link} from '@material-ui/core';
import styles from './../../styles/signup.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


export default function Register(){
    const classes = useStyles();
  
    return(
        <div>
            <Grid  style={{marginLeft:50,marginRight:50,}} >
                <Grid align='center' className={styles.grid}>
                    <Avatar style={{backgroundColor:'#3cd4a3'}}>
                        < AlternateEmailOutlinedIcon/ >
                    </Avatar>  
                    <Typography variant="h4">Sign Up</Typography>
                    <Typography variant="caption"  >Plase fill this form to create an accound !</Typography>
                </Grid>
                <form>
                    <TextField  fullWidth label='Name' placeholder="Enter your name"/>
                    <TextField  fullWidth label='Email' placeholder="Enter your email"/>
                    <TextField  fullWidth label='Phome Number'placeholder="Enter your phone number"/>
                    <TextField  fullWidth label='Password' placeholder="Enter your name"/>
                    <TextField  fullWidth label='Confirm Password' placeholder="Enter your name"/>
                    <FormControl component = "fieldset" style={{marginTop:20,}}>
                        <FormLabel component="leged">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{display:'initial'}}>
                            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                            <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                        </RadioGroup>
                    </FormControl>
                        <FormControlLabel 
                            control={
                                <Checkbox
                                name="checkedB"
                                color="primary"
                                >
                                </Checkbox>
                            }
                            label="I accept the terms and conditions."
                    >
                    </FormControlLabel>
                    
                    <Button type='submit' variant='contained' color='primary' fullWidth>SIGN UP</Button>
                </form>
            </Grid> 
        </div>
    )
}