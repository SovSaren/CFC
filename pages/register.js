import React, { useRef, useState } from "react";
import styles from './../styles/register.module.css'
import { Grid,Avatar,TextField,Button,} from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";
import Mantis from '../components/persentation/text/Mantis Rumble_PersonalUseOnly'

const Register = () => {

    return(
        <div className={styles.body}>
            <Grid className={styles.form}>
             <Grid  style={{marginLeft:50,marginRight:50,}} >
                    <div align='center'>
                        <Avatar  style={{width:60,height:60,backgroundColor:'green',marginTop:-10,}}>
                            < AlternateEmailOutlinedIcon style={{width:60,height:60}} />
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
                        <Button type="submit" fullWidth Link href='/loginpage' 
                        style={{fontSize:23}} className={styles.btn } ><Mantis >Sign Up</Mantis></Button>
                        <Typography style={{marginTop:10}}>
                        if you have an accounnt plase.
                        <Link href="/loginpage">
                           Sign In
                        </Link>
                        </Typography>
                    </form>

                </Grid>
            </Grid> 
        </div>
    )
}
export default Register;






