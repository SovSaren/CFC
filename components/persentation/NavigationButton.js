
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import styles from './../../styles/schooltimeline.module.css'
import { borderRadius } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    width: "100%",
    fontSize:80,
    marginLeft:'auto',
    marginRight:'auto',
  },
  item1:{
    color:'black',
    fontSize:70,
    width:500,
    height:55,    
    marginRight:80,
    marginLeft:80,
    borderRadius:20,
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
      <BottomNavigationAction   className={styles.item} className={classes.item1}  label="Like" icon={<ThumbUpIcon  style={{fontSize:40}}/>}  />
      <BottomNavigationAction className={classes.item1} label="Comment" icon={<CommentIcon style={{fontSize:40}} />} />
      <BottomNavigationAction className={classes.item1} label="Share" icon={<ShareIcon  style={{fontSize:40}} />} />
    </BottomNavigation>
  );
}