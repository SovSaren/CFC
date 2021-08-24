import  React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

 
const drawerWidth = 240;
const useStyles = makeStyles({
    drawer :{
        width: drawerWidth     
    }

})

export default function NavigationMenu(){
    const classes = useStyles()
    return(
        <div>
            <h1>Welcome to Hoem page</h1>
          
        </div>
    )
}