
import React from 'react';
import ReactPlayer from 'react-player';
import ButtonAppBar from '../../components/containers/Appbar';
import { Typography,Paper } from '@material-ui/core';
import SimpleAccordion from './../../components/persentation/chosseLesson';

export default function Test(){
    return(
       <div>
            <ButtonAppBar text="Teaching and learning" />
            <Typography variant="h5" style={{width:'80%',marginLeft:'auto',marginRight:'auto',textAlign:'center'}} >Lesson :	Attaching file in Gmail</Typography>
            <ReactPlayer 
            controls
            width="100%"
            height="80vh"
             url='https://youtu.be/eKyzGmaXENQ'/>
             <Paper style={{marginTop:20}}>
                <SimpleAccordion ></SimpleAccordion>
             </Paper>
       </div>
    )
}
