
import SimpleAccordion from './../components/persentation/chosseLesson'
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from './../components/containers/Appbar'
import Paper from '@material-ui/core/Paper'
const useStyles = makeStyles((theme) => ({
    ImgMediaCard :{
        marginBottom:190,

    },
    card:{
        width:'100%',
        
    },
    root: {
        maxWidth: 280,
        display:'inline-block',
        marginLeft:30,
        
      },
  }));
  
export default function teachinglearning() {
    const classes = useStyles();
    return (
        <div style={{width: `100%`}} >
            <ButtonAppBar text="Teaching and learning"></ButtonAppBar>
            <Paper className={classes.card}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia style={{height:240,width:300,backgroundSize:'cover',backgroundImage:"url('/images/TEVEAAMRIT.jpg')",}}>

                    </CardMedia>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    THY TEVEAAMRIT
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    He is an ICT teacher at Hun Sen Prasat Bakong High School.He teaches 7th , 8th and 9th grade.
                    </Typography>
                    <Typography variant="body2" color="blank" component="p">
                    Contact: 095 30 37 54
                    </Typography>
                    <Typography variant="body2" color="blank" component="p">
                    Email: thyteveaamrit@gmail.com
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Learn more
                    </Button>
                </CardActions>

                </Card>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia style={{height:240,width:300,backgroundSize:'cover',backgroundImage:"url('/images/laipiseth.jpg')",}}>

                    </CardMedia>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    LAi PiSETH
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    He is an STEM teacher at Hun Sen Prasat Bakong High School.He teaches 10th , 11th and 12th grade.
                    </Typography>
                    <Typography variant="body2" color="blank" component="p">
                    Contact: 082 39 37 20
                    </Typography>
                    <Typography variant="body2" color="blank" component="p">
                    Email: laipiseth@gmail.com
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Learn more
                    </Button>
                </CardActions>

                </Card>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia style={{height:240,width:300,backgroundSize:'cover',backgroundImage:"url('')",}}>

                    </CardMedia>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Rat Pearit
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    He is an ICT teacher at Hun Sen Prasat Bakong High School.He teaches 7th , 8th and 9th grade.
                    </Typography>
                    <Typography variant="body2" color="blank" component="p">
                    Contact: 095 30 37 54
                    </Typography>
                    <Typography variant="body2" color="blank" component="p">
                    Email: thyteveaamrit.com
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Learn more
                    </Button>
                </CardActions>
                </Card>
            </Paper>
            <div style={{marginTop:60}}>
                 <SimpleAccordion></SimpleAccordion>
            </div>
           
        </div>
    )
}