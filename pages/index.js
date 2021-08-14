import  React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'




 
const drawerWidth = 240;
const useStyles = makeStyles({
    drawer :{
        width: drawerWidth
   
            
    }
    ,root:{
        width:700,
        height:500,
    }

})

export default function NavigationMenu(){
    const classes = useStyles()
    return(
        <div className={classes.root} style={{ backgroundimage : '/news.jpg'}}>
            <h1>Welcome to Hoem page</h1>
            
      
     
          
          
        </div>
    )
}