import { ButtonGroup, Typography,Paper } from '@material-ui/core';
import React from 'react';
import ReactPlayer from 'react-player';
import ButtonAppBar from '../../components/containers/Appbar';
import SimpleAccordion from './../../components/persentation/chosseLesson';


export default function Test(){
    return(
       <div>
            <ButtonAppBar text="Teaching and learning" />
            <Typography variant="h5" style={{width:'80%',marginLeft:'auto',marginRight:'auto',textAlign:'center'}} >Lesson : Introduction to Google Drive</Typography>
            <ReactPlayer 
            controls
            width="100%"
            height="80vh"
             url='https://youtu.be/D457Fjrn2jQ'/>
             <Paper style={{marginTop:20}}>
             <SimpleAccordion></SimpleAccordion>
             </Paper>
       </div>
    )
}
