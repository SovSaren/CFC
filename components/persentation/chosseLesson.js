import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RestoreIcon from '@material-ui/icons/Restore';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';
import SimpleBottomNavigation from './label';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const navs = [
   
    {
        path: '/schooltimeline',
        icon: <RestoreIcon   />,
        name: 'How to create Google account or'
    },
    {
        path: '/classtimeline',
        icon: <RestoreIcon/>,
        name: 'Introduction to Google Drive',
    },
   
]

const navs2 = [
   
  {
      path: '/schooltimeline',
      icon: <RestoreIcon   />,
      name: 'Attaching file in Gmail'
  },
  {
      path: '/classtimeline',
      icon: <RestoreIcon/>,
      name: 'Create and sending Gmail',
  },
 
]

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Unit 1 : Connecting to the World</Typography>
        </AccordionSummary>

            {navs.map((page, index) => (
                    <AccordionDetails>
                      <Link href={page.path}>
                          <Paper style={{height:40}}  elevation={5} button key={index}>
                              <SimpleBottomNavigation></SimpleBottomNavigation>
                          </Paper>
                      </Link>
                      <Paper style={{height:50,width:'90%'}} elevation={5}>
                          <Typography style={{paddingTop:10,paddingLeft:50,}} >Lesson : {page.name}</Typography>
                          </Paper>
                    </AccordionDetails>
                ))}
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Unit 2 : What is Digital Citizenship</Typography>
        </AccordionSummary>

            {navs2.map((page, index) => (
                    <AccordionDetails>
                      <Link href={page.path}>
                          <Paper style={{height:40}}  elevation={5} button key={index}>
                              <SimpleBottomNavigation></SimpleBottomNavigation>
                          </Paper>
                      </Link>
                      <Paper style={{height:50,width:'90%'}} elevation={5}>
                          <Typography style={{paddingTop:10,paddingLeft:50,}} >Lesson : {page.name}</Typography>
                          </Paper>
                    </AccordionDetails>
                ))}
      </Accordion>
 

      
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}