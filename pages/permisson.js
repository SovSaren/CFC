
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from '../components/containers/Appbar';




const useStyles = makeStyles((theme) => ({
  root: {
    width:800,
    marginLeft:'auto',
    marginRight:'auto',

  },
  all:{
    marginTop:30,

  },
  space:{
    marginTop:20,
  }

}));

export default function StateTextFields() {
  const classes = useStyles();
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    
    <Paper style={{marginTop:30,paddingBottom:40,width:900}}>
    <form className={classes.root} noValidate autoComplete="off">
        <TextField
            label=" User Name"
            placeholder="Enter your phone name" 
            fullWidth 
            required
            className={classes.space}
          />
          <TextField
            id="filled-firstname"
            label=" Class"
            fullWidth 
            required
            className={classes.space}
          />
            <TextField
            id="date"
            label="Birthday"
            required
            type="date"
            defaultValue="2017-05-24"
            style={{width:240,marginTop:30}}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
            <TextField
            id="datetime-local"
            label="Start time"

            required
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            style={{marginLeft:40,width:240,marginTop:30}}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            style={{marginLeft:40,width:240,marginTop:30}}
            id="datetime-local"
            label="End time"
            required
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="reason"
            required
            fullWidth
            className={classes.space}
          />
          <Button variant="contained"  className={classes.space} color="primary" fullWidth  >Submit</Button>
     </form>      
  </Paper>   
  );
}