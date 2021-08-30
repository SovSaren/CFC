import React,{useEffect} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import {Grid, ButtonBase} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { fireAuth } from "../../../services/firebase";

import { useRouter } from "next/router";
import Image from "next/image";
import CircularProgress from "@material-ui/core/CircularProgress";
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        SabaiCode
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 50,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonProgress: {
    color: "#550000",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));


export default function LoginForm() {
  
  const classes = useStyles();
  const router = useRouter();
  const [currentUser,setCurrentUser]=React.useState(null);
  useEffect(() => {
    let unmounted = false; 
    fireAuth.onAuthStateChanged((user) => {
      if(!unmounted){
        setCurrentUser(user);
       
      }
      
    });
    return () =>{unmounted= true};
  }, []);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isForgotPassword, setIsforgotPassword] = React.useState(true);
  const [showMessage ,setShowMessage]= React.useState(false)
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    setLoading(true);
    fireAuth
      .signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        console.log(res);
        setError("");
        setLoading(false);
        router.push('/home')
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err.message);
      });
  };
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const {email} = e.target.elements;
    console.log(email.value);
    fireAuth.sendPasswordResetEmail(email.value)
    .then( ()=> {
      setShowMessage(true)
        setIsforgotPassword(true)
        setError("");
    }).catch( (e)=> {
       setError(e.message)
    }) 
  };
 
  React.useEffect(()=>{
    console.log(fireAuth)
  })
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {showMessage && <Alert severity="info">Please check your email</Alert>}
      
        <div className={classes.paper}>
          <Image
            className={classes.avatar}
           
            src="/sabaicode.jpg"
            alt="Sabaicode Logo"
            width={100}
            height={100}
          />

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {isForgotPassword ? (
            <form onSubmit={handleLogin} className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Typography color="secondary">{error}</Typography>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <div className={classes.wrapper}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  className={classes.submit}
                >
                  Sign In
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
              <Grid container>
                <Grid item xs>
                  <ButtonBase onClick={() => setIsforgotPassword(false)}>
                    <Link href="" variant="body2">
                      Forgot password?
                    </Link>
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          ) : (
            <form onSubmit={handleForgotPassword} className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <Typography color="secondary">{error}</Typography>
             
              <div className={classes.wrapper}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  className={classes.submit}
                  
                >
                  Send
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          )}
        </div>
      </Grid>
    </Grid>
  );
}
