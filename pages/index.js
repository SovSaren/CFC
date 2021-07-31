
import 
{  
  ButtonGroup ,
   Button ,
   Typography,
   Paper,
   makeStyles ,
   BottomNavigation,
   BottomNavigationAction,
 }
  from "@material-ui/core";

  import HomeIcon from '@material-ui/icons/Home';
  


const usestayles = makeStyles({
  btn: {
    fontSize: 40,
    backgroundColor: "red"
  }
})

export default function Home(){
  const classes = usestayles()
  return (
    <div >   
      <Typography 
      variant="h2"
      >
        Typography
      </Typography>
      <Button variant="submit" 
      className={classes.btn}
      onClick={() => console.log('Player')}
      >
        BUTTOn SUBMIT
      </Button>
      <ButtonGroup color="secondary" variant="cotained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <br></br>
      <br></br>
      < Paper>Paper</Paper>
      <HomeIcon></HomeIcon>

 

    </div>
   
  )
}
