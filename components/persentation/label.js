import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
 import FileCopyIcon from '@material-ui/icons/FileCopy';
import Paper from '@material-ui/core/Paper'
const useStyles = makeStyles({
  root: {
    width: 50,
    height:50,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
      <Paper elevation={5}>
            <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            >
            <BottomNavigationAction label="views" icon={<FileCopyIcon />} />

            </BottomNavigation>
      </Paper>
  );
}