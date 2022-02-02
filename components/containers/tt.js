import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Link from 'next/link';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import TodayIcon from '@material-ui/icons/Today';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PanToolIcon from '@material-ui/icons/PanTool';
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import Mantis from './../persentation/text/Mantis Rumble_PersonalUseOnly';
import router, { useRouter } from "next/router";
import { fireAuth } from '../../services/firebase';


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        
    },
    toolbars: {
        height:150,
        backgroundImage: "url('https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80')",
        backgroundSize:"cover",


    },
    content: {
        flexGrow: 1,
        padding:theme.spacing(4),
    },
    paper:{
        backgroundColor:'#cfe8ec',
    },
}));

function NavigationMenu(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleSignOut =()=>{
        fireAuth.signOut()
        .then(()=>{
            router.push('../../../loginpage')
        }).catch(()=>{
            console.error(err)
        })
    }

    const navs = [
   
        {
            path: '/schooltimeline',
            icon: <AccountBalanceIcon  style={{width:40,height:30,}}/>,
            name: 'School TimeLine '
        },
        {
            path: '/classtimeline',
            icon: <TodayIcon style={{width:40,height:30,}}/>,
            name: 'Class TimeLine',
        },
        {
            path:'/teachingandlearning',
            icon: <MenuBookIcon style={{width:40,height:30,}}/>,
            name: 'Teaching and Learning',
        },
        {
            path:'/resaultevaluattion',
            icon: <KeyboardIcon style={{width:40,height:30,}}/>,
            name: 'Reault Evaluattion ',
        },
        {
            path:'/attendence',
            icon: <AssignmentTurnedInIcon style={{width:40,height:30,}}/>,
            name: 'Attendence',
        },
        {
            path:'/permisson',
            icon: <PanToolIcon style={{width:40,height:30,}} />,
            name: 'Permission',
        },
    ]

    const drawer = (
        <div  className={styles.menus}>
            <div className={classes.toolbars}  >
                <div style={{paddingTop:25,paddingLeft:10,}}>
                    
                        <Avatar style={{width:50,height:50,}}><AccountCircleIcon style={{width:60,height:60,}}></AccountCircleIcon></Avatar>   
                        <Typography style={{color:'white'}}>
                            <Link  href="#">
                                Sov Saren
                            </Link>
                        </Typography>             
                        <Typography  style={{color:'white'}}>+855 99 218 567</Typography>
                </div>
            </div>
            <Divider />
           
            <List>
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
                                <ListItemIcon style={{color: 'blue',}}><ExitToAppTwoToneIcon style={{width:40,height:35,}} /></ListItemIcon>
                                <ListItemText  onClick={handleSignOut}>Logout</ListItemText>
                                
                            </ListItem>

            </List>

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
