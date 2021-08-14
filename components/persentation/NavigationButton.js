
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles({
  root: {
    width: "70%",
    fontSize:80,
    marginLeft:'auto',
    marginRight:'auto',
  },
  item :{
    color:'black',
    fontSize:30,
    width:30,
    height:60,    
    marginLeft:100,
    marginRight:100,
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.item} label="Like" icon={<ThumbUpIcon />} />
      <BottomNavigationAction className={classes.item} label="Comment" icon={<CommentIcon />} />
      <BottomNavigationAction className={classes.item} label="Share" icon={<ShareIcon />} />
    </BottomNavigation>
  );
}