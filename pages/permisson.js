import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'




const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
      
    },
    

  },
  all:{
    height:"90%",
    width:"80%"

  },

}));

export default function StateTextFields() {
  const classes = useStyles();
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
<Paper className={classes.all}>
  <form className={classes.root} noValidate autoComplete="off">
  
      
       
       <TextField
          id="filled-firstname"
          label=" First Name"
          defaultValue="    "
          variant="filled"
        />
        <TextField
          id="filled-firstname"
          label=" Last Name"
          defaultValue="   "
          variant="filled"
        />
       
      
       
      
      
  <TextField
    id="date"
    label="Birthday"
    type="date"
    defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
   <TextField
          id="filled-firstname"
          label=" Sex"
          defaultValue="   "
          variant="filled"
        />
     
        


  
 
  <TextField
    id="datetime-local"
    label="Start time"
    type="datetime-local"
    defaultValue="2017-05-24T10:30"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />


<TextField
    id="datetime-local"
    label="End time"
    type="datetime-local"
    defaultValue="2017-05-24T10:30"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
</form>
         

        <div style={{width:800,}}> 
        <TextField
          label="reason"
          defaultValue=""
          variant="filled"
          fullWidth
        />
        </div>
     
    <Button variant="contained" color="primary"  style={{marginTop:30,marginLeft:300,width:200}} disableElevation>Submit</Button>
    
    </Paper>
  );
}