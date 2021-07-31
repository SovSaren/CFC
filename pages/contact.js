import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
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
      style={{backgroundColor:"#dddddd",marginLeft:"200px",marginTop:"300px"}}
    >
      <BottomNavigationAction label="" icon={<ThumbUpIcon />} />
      <BottomNavigationAction label="Favorites" icon={<ChatBubbleOutlineIcon />} />
      <BottomNavigationAction label="Nearby" icon={<ShareIcon />} />
    </BottomNavigation>
  );
}