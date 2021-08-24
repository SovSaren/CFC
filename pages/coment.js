import React from 'react';
import styles from './../styles/coment.module.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonAppBar from './../components/containers/Appbar'
import emailjs from 'emailjs-com';
import {ToastProvider, useToasts} from 'react-toast-notifications';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles({

paper:{
  marginLeft:"auto",
  marginRight:'auto',
  width:"70%"
}
});


export default function Coment(){
  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_yudw4j2', 'template_9moeni2', e.target, 'user_X0xzu2snxvtZCtVnFcK0D')
    .then(
        (result) => {
          console.log(result.text);
 
        },
        (error) => {
          console.log(error.text);
         
        }
        
      );
    e.target.reset();
  }
    return(
        <div>
            <ButtonAppBar text="Comment"></ButtonAppBar>
                <Paper className={classes.paper}>
                  <form  className={styles.form} onSubmit={sendEmail}>
                          <input type="name" name="name" placeholder="Full Name"/>
                          <input type="email" name="email" placeholder="Email Address"/>
                          <input type="number" name="Phone_Number" placeholder="Phone Number"/>
                          <input type="text" name="question" placeholder="Message"/>
                          <button type="submit">SUBMIT</button>
                  </form>
                </Paper>
                    
            
        </div>
    )
}