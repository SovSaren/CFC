import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Link from 'next/dist/client/link';
import Hidden from '@material-ui/core/Hidden';
import { fireAuth } from '../../services/firebase';
import { Button } from '@material-ui/core';
import styles from './../../styles/menu.module.css';
import Mantis from './../persentation/text/Mantis Rumble_PersonalUseOnly';
import router, { useRouter } from "next/router";
import ExitToAppTwoTone from '@material-ui/icons/ExitToAppTwoTone';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PanToolIcon from '@material-ui/icons/PanTool';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Dialog } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';


const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  dialog:{
    height:450,
    width:2300,
    display: "inline-block",
    
  },
  setdialog:{
    width:"250px",
    height:"300px",
    
    
},
item1:{
  
  width:"200px",
  height:"300px",
  display: "inline-block",
  textAlign:'center',
  paddingLeft:'20px'
 
},
}));



const navs = [
   
  {
      path: '/schooltimeline',
      icon: < AccountBalanceIcon style={{width:30,height:30,}} />,
      name: 'School TimeLine '
  },
  {
      path: '/classtimeline',
      icon: < AssignmentIcon style={{width:30,height:30,}} />,
      name: 'Class TimeLine',
  },
  {
      path:'/teachingandlearning',
      icon: < ImportContactsIcon style={{width:30,height:30,}} />,
      name: 'Teaching and Learning',
  },
  {
      path:'/resaultevaluattion',
      icon: < KeyboardHideIcon style={{width:30,height:30,}} />,
      name: 'Reault Evaluattion ',
  },
  {
      path:'/attendence',
      icon: < AssignmentTurnedInIcon style={{width:30,height:30,}} />,
      name: 'Attendence',
  },
  {
      path:'/permisson',
      icon: < PanToolIcon  style={{width:30,height:30,}} />,
      name: 'Permission',
  },
]

function NavigationMenu(props)  {
  const classes = useStyles();
  const theme = useTheme();
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [onpen1,setOpen1] = React.useState(false);
  const userInfo = fireAuth.currentUser;
  useEffect(()=>{
    localStorage.setItem("userInfo", userInfo)
  });
  if(!userInfo) return<div/>

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
  };
  const handleSignOut =()=>{
    fireAuth.signOut()
    .then(()=>{
      router.push('../../../loginpage'),
      console.log("good")
    }).catch(()=>{
        console.error(err)
    })
};



  

  const drawer = (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={styles.toolbar} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon style={{width:30,height:40,}}/>
          </IconButton>
          <Typography variant="h5" noWrap>
            <Mantis>
                CARING FOR CAMBODAI STUDY ONLINE CLASS 
            </Mantis>
          </Typography>
         <div className={styles.gbtn} style={{float:"right"}}>
         <Button  className={styles.btn} style={{float:"right"}} onClick={()=>setOpen1(true)}>
            <AccountCircleIcon  style={{width:50,height:50,}}/>
         </Button>
         </div>
         <Dialog open={onpen1} className={classes.dialog} > 
            <form>
              <div className={classes.setdialog}>
              <div  className={classes.item1}>
                <p >
                 <img src={userInfo.photoURL} width="60px" />
                </p> 
              <Typography>  {userInfo.displayName}</Typography>
              <Typography>  {userInfo.email}</Typography>
              <Button onClick={()=>setOpen1(false)}>cencel</Button>
              </div>
            </div>
            </form>
         </Dialog>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <Paper className={classes.paper}>
                
                {navs.map((page, index) => (
                    

                    <Link href={page.path}  > 
                        <ListItem  className={classes.texts}  button key={index} >
                        <ListItemIcon style={{color: 'blue',height:20,}}>{page.icon}</ListItemIcon>
                        <ListItemText style={{height:50}}><p style={{fontSize:20}}><Mantis>{page.name}</Mantis></p></ListItemText>
                        </ListItem>
                    </Link>
                ))}
                   

            </Paper>
            <ListItem  button  style={{color:'red'}}>
              <ListItemIcon style={{color: 'blue',}} onClick={handleSignOut}><ExitToAppTwoTone style={{width:40,height:40,}} /></ListItemIcon>
              <ListItemText  onClick={handleSignOut}>Logout</ListItemText>
                                
            </ListItem>
            

      </Drawer>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
           
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
            <haede/>
        </div>
    );
}
export default NavigationMenu;