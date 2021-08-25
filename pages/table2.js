import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function StateTextFields() {
  const classes = useStyles();
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
       <div>
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
       
      
       </div>
      <div>
      <form className={classes.container} noValidate>
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
     </form>
        </div>


  <div>
  <form className={classes.container} noValidate>
  <TextField
    id="datetime-local"
    label="Next appointment"
    type="datetime-local"
    defaultValue="2017-05-24T10:30"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />


<TextField
    id="datetime-local"
    label="Next appointment"
    type="datetime-local"
    defaultValue="2017-05-24T10:30"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
</form>
         </div>
        <div>
        <TextField
          id="filled-lastname"
          label="reson"
          defaultValue=""
          variant="filled"
          width="300"
        />
        </div>
     
   
    </form>
  );
}