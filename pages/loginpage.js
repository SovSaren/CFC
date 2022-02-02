import React from "react";
import styles from './../styles/login.module.css';
import { Grid,Paper, Typography ,Avatar,TextField,Button,Link} from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import {fireAuth} from "./../services/firebase";
import router, { useRouter } from "next/router";
import Mantis from '../components/persentation/text/Mantis Rumble_PersonalUseOnly';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    btn:{
        marginTop:10,
    }
  });

export default function Logins(){
    const classes = useStyles();
    const [error, setError] = React.useState("");
    const [menu,setMenu]=React.useState(0);
    const [loading,setLoading]=React.useState(false);
    const handleUserSignIn = (e) =>{
        e.preventDefault();
        setLoading(true);
       const {email,password} = e.target.elements;
       fireAuth.signInWithEmailAndPassword(email.value,password.value)
       .then((res) =>{
           router.push('/schooltimeline');
           setLoading(false)
       }).catch((err)=>{
           console.error(err);
           setError(err.message);
           setLoading(false)
       })
    }
    const handleForgotPassword = (e) => {
        e.preventDefault();
        setLoading(true);
        const {email} = e.target.elements;
        fireAuth.sendPasswordResetEmail(email.value)
        .then( (res) =>{
            setLoading(false)
        }).catch ( (err) => {
            setError(err.message)
            setLoading(false)
        })

    }


    return(
        
        <div className={styles.body}>
             {
                  menu==0&&
            <div className={styles.form} >
                <Grid align='center' className={styles.grid}>
                    <Avatar style={{backgroundColor:'#3cd4a3'}}>< AlternateEmailOutlinedIcon/ ></Avatar>
                    <h1>Sign In</h1>  
                </Grid>
                <form onSubmit={handleUserSignIn} style={{marginLeft:50,marginRight:50,}}>
                        <TextField  
                            fullWidth 
                            label='Email' 
                            placeholder="Enter your email" 
                            name="email"
                            required/>
                        <TextField  
                            fullWidth label='Password' 
                            placeholder="Enter your Password"
                            type='password'
                            id="password"
                            name="password"
                            required
                            />
                        <Typography 
                            color="secondary">
                                {error}
                       </Typography>
                        <Button  
                               
                              type="submit"  
                              fullWidth
                              className={classes.btn}
                              style={{fontSize:23,marginTop:20,}} 
                              disabled={loading}
                              className={styles.btn } ><Mantis >{loading? "Loading...":"Sign In"}</Mantis>
                        </Button>
                        <Typography  style={{marginTop:20}}>
                          <Button onClick={()=>setMenu(1)}><p>Forgot Password ? </p></Button>        
                        </Typography>
                        <Typography style={{marginTop:10}} >
                            Do you have an accounnt?
                            <Link href="/">
                            Sign up
                            </Link>
                        </Typography>
                </form>
            </div>
           }
           
          {
            menu==1 &&  <div className={styles.form} >
            <Grid align='center' className={styles.grid}>
                <Avatar style={{backgroundColor:'#3cd4a3'}}>< AlternateEmailOutlinedIcon/ ></Avatar>
                <h1>Forgot Password</h1>  
            </Grid>
            <form onSubmit={handleForgotPassword} style={{marginLeft:50,marginRight:50,}}>
                    <TextField  
                        fullWidth 
                        label='Email' 
                        placeholder="Enter your email" 
                        name="email"
                        required/>
                    <Button  
                           
                          type="submit"  
                          fullWidth
                          className={classes.btn}
                          style={{fontSize:23,marginTop:20,}} 
                          disabled={loading}
                          className={styles.btn } ><Mantis >{loading? "Loading...":"Send Code"}</Mantis>
                    </Button>
                    <Typography style={{marginTop:10}} >
                        Do you have an accounnt?
                        <Link href="/">
                        Sign up
                        </Link>
                    </Typography>
            </form>
        </div>
            
        }
           
        </div>
    )
}