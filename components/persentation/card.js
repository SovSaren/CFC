import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginLeft:'auto',
    marginRight:'auto'
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/images/TEVEAAMRIT.jpg "
          title="Contemplative Reptile"
          height="200"

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          THY TEVEAAMRIT
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            , with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <Typography variant="body2" color="blank" component="p">
           Contact: 095 30 37 54
          </Typography>
          <Typography variant="body2" color="blank" component="p">
           Email: seihatith@gmail.com
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn more
        </Button>

      </CardActions>
    </Card>
  );
}