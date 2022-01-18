
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import ShareIcon from '@material-ui/icons/Share';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import CommentIcon from '@material-ui/icons/Comment';
// import styles from './../../styles/schooltimeline.module.css'
// import { borderRadius } from '@material-ui/system';

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     fontSize:80,
//     marginLeft:'auto',
//     marginRight:'auto',

//   },
//   item1:{
//     color:'black',
//     fontSize:70,
//     width:500,
//     height:55,    
//     marginRight:80,
//     marginLeft:80,
//     borderRadius:20,
//   }
// });

// export default function ButtonLikeShareComment() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(1);

//   return (
//    <div>
//          <BottomNavigation
//                      value={value}
//                      onChange={(event, newValue) => {
//                        setValue(newValue);
//                      }}
//                      showLabels
//                      className={classes.root}
//     >
//       <BottomNavigationAction  className={classes.item1}  label="Like" icon={<ThumbUpIcon  style={{fontSize:40}}/>}  />
//       <BottomNavigationAction  className={classes.item1}  label="Like" icon={<ThumbUpIcon  style={{fontSize:40}}/>}  />
//       <BottomNavigationAction  className={classes.item1}  label="Like" icon={<ThumbUpIcon  style={{fontSize:40}}/>}  />
//     </BottomNavigation>
//    </div>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';


const useStyles = makeStyles({
  root: {
    width: "100%",
    marginLeft:'auto',
    marginRight:'auto',
  },
  item :{
    color:'black',
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
    <div>
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction className={classes.item} label="Like " icon={<ThumbUpIcon style={{width:70,height:40,}}/>} />
        <BottomNavigationAction className={classes.item} label="Comment" icon={<CommentIcon style={{width:70,height:40,}} />} />
        <BottomNavigationAction className={classes.item} label="Dislike" icon={<ShareIcon style={{width:70,height:40,}}/>} />
      </BottomNavigation>
    </div>
  );
}