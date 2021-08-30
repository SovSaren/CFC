
import SimpleAccordion from './../components/persentation/chosseLesson'
import ImgMediaCard from './../components/persentation/card'
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from './../components/containers/Appbar'
import Paper from '@material-ui/core/Paper'
const useStyles = makeStyles((theme) => ({
    ImgMediaCard :{
        marginBottom:190,

    },
    card:{
        width:'100%',
        
    }
  }));
  
export default function teachinglearning() {
    const classes = useStyles();
    return (
        <div style={{width: `100%`}} >
            <ButtonAppBar text="Teaching and learning"></ButtonAppBar>
            <Paper className={classes.card}>
            <ImgMediaCard> </ImgMediaCard>
            <ImgMediaCard> </ImgMediaCard>
            <ImgMediaCard> </ImgMediaCard>
            </Paper>
            <div style={{marginTop:60}}>
                 <SimpleAccordion></SimpleAccordion>
            </div>
           
        </div>
    )
}