import React from 'react';
import { Grid,Paper, Typography ,Avatar,TextField,Button,Link} from '@material-ui/core';
import styles from './../../styles/signup.module.css'
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import Mantis from './../persentation/text/Mantis Rumble_PersonalUseOnly';
import { useRouter } from 'next/router';


const useStyles = makeStyles({
    table: {
      minWidth: 100,
    },
  });
  


export default function Register(){
    const classes = useStyles();
    const initialValues={
        name:'',
        email:'',
        password:''
    }
 console.log('initialValues')
  
    return(
        <div>
            <Grid  style={{marginLeft:50,marginRight:50,}} >
                <div align='center' className={styles.grid}>
                    <Avatar  style={{width:60,height:60,backgroundColor:'green'}}>
                        < AlternateEmailOutlinedIcon style={{width:60,height:60}} / >
                    </Avatar>  
                    < p style={{fontSize:20}}><Mantis> Sign Up</Mantis></p>
                    <p ><Mantis>Plase fill this form to create an accound !</Mantis></p>
                </div>
                <form>
                    <TextField  fullWidth label='Name' placeholder="Enter your name" required/>
                    <TextField  fullWidth label='Email' placeholder="Enter your email" required/>
                    <TextField  fullWidth label='Phome Number'placeholder="Enter your phone number" required/>
                    <TextField  
                    fullWidth label='Password' 
                    placeholder="Enter your name"
                    type='password'
                    id="password"
                    required
                    />
                    <TextField  
                     fullWidth
                     label='Confirm Password'
                     type='password'
                     placeholder="Enter your name"
                     id="confirm_password"
                     required
                     />
                     
                     
                    <FormControl component = "fieldset" style={{marginTop:20,}}>
                        <FormLabel component="leged">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{display:'initial'}}>
                            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                            <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                        </RadioGroup>
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
                    </FormControl>

                    
                    <Button type='submit' variant='contained' color='primary' fullWidth>SIGN UP</Button>
                </form>
            </Grid> 
        </div>
    )
}