  import React from 'react';
  import styles from './../styles/coment.module.css'
  import { makeStyles } from '@material-ui/core/styles';
  import ButtonAppBar from './../components/containers/Appbar'
  import emailjs from 'emailjs-com';
  import { Paper } from '@material-ui/core';
  import { Button } from '@material-ui/core';
  import Mantis from './../components/persentation/text/Mantis Rumble_PersonalUseOnly';


  const useStyles = makeStyles({
  paper:{
    width:"80%",
    marginLeft:'auto',
    marginRight:'auto'
  },
  btn:{
    width:170,
    fontSize:30,
    marginLeft:12,
    height:40,
    marginTop:20,
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
                  <Paper className={classes.paper}  onSubmit={sendEmail}>
                    <form  className={styles.form} >
                            <input type="name" name="name" placeholder="Full Name"/>
                            <input type="email" name="email" placeholder="Email Address"/>
                            <input type="number" name="Phone_Number" placeholder="Phone Number"/>
                            <input type="text" name="question" placeholder="Message"/>
                            <Button className={classes.btn} type="submit" ><Mantis >SUBMIT</Mantis></Button>
                    </form>
                    
                  </Paper>  
          </div>
      )
  }