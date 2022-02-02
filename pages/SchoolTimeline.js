import React, { useReducer } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SimpleBottomNavigation from './../components/persentation/buttonlikesharecomment';
import ButtonAppBar from './../components/containers/Appbar';
import { red } from '@material-ui/core/colors';
import { textAlign } from '@material-ui/system';
import { fireAuth } from "../services/firebase";
import router, { useRouter } from "next/router";
import { TextField ,Dialog} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { fireStore } from "../services/firebase";
import { fireStorage } from "../services/firebase";
import styles from './../styles/schooltimeline.module.css';
import CloseIcon from '@material-ui/icons/Close';
import { userState } from "../states/userState";
import { useRecoilValue } from "recoil";
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridGap: theme.spacing(1),
    height:'auto',
    width:'100%',
    marginLeft:'auto',
    marginRight:'auto',
   
  },
  paper: {
     width:'80%',
  },
  accoun:{
    width:'30%',
    height:'70px',
    marginLeft:50,
    display:'inlineBlock'
},
table: {
    width: "580px",
    margin: "30px auto",
    border: "1px solid #1A1818",
    "& td,tr": {
        border: "1px solid #1A1818",
    },
  },
  root:{
      width:"600px",
      height:"100vh"
      
  },
  form: {
    width:"550px",
    margin: "0px auto",


  }
}));

export default function CSSGrid() {
  const classes = useStyles();
  const [users,setUsers]= React.useState([]);
  const [onpen,setOpen] = React.useState(false);
  const [onpen1,setOpen1] = React.useState(false);
  const [onpen2,setOpen2] = React.useState(false);
  const [file, setFile] = React.useState(null);
  const [userUpdatePost,setUserupdetePost]= React.useState({});
  const username = useRecoilValue(userState);
  console.log("Username",username);

function addPosts(e) {
    e.preventDefault();
    const description = e.target.elements.description.value;
    const profile = e.target.elements.profile.files[0];
    const storageRef = fireStorage.ref('profile/');
    const fileRef = storageRef.child(profile.name);
    fileRef.put(profile)
    .then ((res)=>{
        fileRef.getDownloadURL()
        .then((res)=>{
            setOpen(false)
            fireStore.collection("users")
            .add({
                username,
                description:description,
                profile: res,
            }).then((res)=>{
                console.log("add post")
               
            }).catch((err)=>{
                console.error(err.message)
            })

        }).catch((err)=>{
            console.error(err)
        })

    }).catch((err)=>{
        console.error(err)
    })
   

}
function updatePost(e) {
    e.preventDefault();
    const description = e.target.elements.description.value;
    const profile = e.target.elements.profile.files[0]
    console.log(description);

    if(profile){
        const storageRef = fireStorage.ref('profile/');
        const fileRef = storageRef.child(profile.name);
        fileRef.put(profile)
        .then ((res)=>{
            fileRef.getDownloadURL()
            .then((res)=>{
                setOpen(false)
                fireStore.collection("users")
                .doc(userUpdatePost.id)
                .update({
                    description:description,
                    profile: res,
                }).then((res)=>{
                    console.log("add user")
                }).catch((err)=>{
                    console.error(err.message)
                })
    
            }).catch((err)=>{
                console.error(err)
            })
    
        }).catch((err)=>{
            console.error(err)
        })
    }else{
        fireStore.collection("users")
        .doc(userUpdatePost.id)
        .update({
            description:description,
        }).then((res)=>{
            console.log("add user")
        }).catch((err)=>{
            console.error(err.message)
        })
    }
};
function fetchPost(user){
    setOpen2(true);
    setUserupdetePost(user)
    console.log(user)

}
React.useEffect(()=>{
    fireStore.collection('users')
    .onSnapshot((snapshot)=>{
        let data = snapshot.docs.map((doc,index)=>{
            return({
                id:doc.id,
                ...doc.data()
            })
        })
        console.log(data)
     setUsers(data);
    })
},[]);
function handleDeleteUser(id){
    fireStore.collection('users').doc(id).delete()
    .then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.error(err)
    })
};
function handleUploadfile(e) {
    const file = e.target.files[0];
    setFile(file);
  }


  return (
    <div> 
        <div style={{width:'100%'}}>
            <Button variant="outlined" onClick={()=>setOpen(true)} className={styles.btn} type="submit" style={{float: "left" ,width:'440px'}} color=''>POST</Button>
            <Button variant="outlined" onClick={()=>setOpen1(true)} className={styles.btn} type="submit"  style={{float: "left",marginLeft:10,width:'440px'}} color=''>History</Button>
        </div>   <br/><br/><br/>
                {
                    users.map((user,index)=>{
                        return(
                            <Paper elevation={5} key={index} style={{ marginTop:30,maxWidth:900}}> 
                                <Paper style={{maxHeight:150}}>
                                    <Button  style={{colro:"red",marginLeft:15, marginTop:10}}>
                                        <img src={user.username.profile}  width='40px'/>
                                        <Typography style={{marginLeft:20}} >{user.username.username}<br/></Typography>
                                        
                                    </Button>
                                    <Typography style={{colro:"red",marginLeft:15}} >{user.description} </Typography>
                                </Paper>
                                 <Paper elevation={1} style={{marginTop:20 }}  className={classes.container}>
                                    <img src={user.profile}  width='100%'/>
                                </Paper>
                            </Paper>
                        )
                    }) 
                }
    <Dialog open={onpen} >
        <div className={classes.root}> 
         <LinearProgress></LinearProgress>
                <form onSubmit={addPosts} className={classes.form}  >      
                        <Button onClick={()=>setOpen(false)} style={{float:"right"}}  ><CloseIcon style={{width:"50px",height:"50px",color:"black"}}/></Button><br/><br/>
                        <AccountCircleIcon style={{width:"50px",height:"50px",color:"red"}}/>
                        <Typography>Name</Typography>
                        {file && <img src={window.URL.createObjectURL(file)} width={"30%"} />}
                        <TextField    label= "Say something about this post..."  fullWidth name="description" variant="filled" />
                        <input  type="file" fullWidth name="profile" accept="jpg" onChange={handleUploadfile}/>
                        <Button  variant="outlined" type="submit" fullWidth>post<CircularProgress color="secondary"></CircularProgress></Button>    
                </form>
        </div>
  </Dialog>   
  <Dialog open={onpen1} >
      <div className={classes.root}>
      <Button  onClick={()=>setOpen1(false)} style={{float:"right"}}  ><CloseIcon style={{width:"50px",height:"50px",color:"black"}}/></Button><br/><br/>
        <table className={classes.table}>
        <caption><Typography>All post</Typography></caption>
            <tr>
                <td>Post</td>
                <td>Description</td>
                <td>Update</td>
                <td>Delete</td>
           </tr>
           {users.map((user,index)=>{
               return(
               <tr key={index}>
                   <td>
                      <img src={user.profile} width="50px"/>
                   </td>
                   <td>
                       {user.description} 
                   </td>
                   <td>
                    <Button onClick={()=>fetchPost(user)}   >Update</Button>
                   </td>
                   <td>
                    <Button onClick={()=> handleDeleteUser(user.id)}>Delete</Button>
                   </td>  
               </tr>
               );
           })
           }

        </table>
     </div>
     
    </Dialog>   
    <Dialog open={onpen2}>
       <div className={classes.root}>
       <form onSubmit={updatePost} className={classes.form}  >      
                        <Button onClick={()=>setOpen2(false)} style={{float:"right"}}  ><CloseIcon style={{width:"50px",height:"50px",color:"black"}}/></Button><br/><br/>
                        <AccountCircleIcon style={{width:"50px",height:"50px",color:"red"}}/>
                        <Typography>Name</Typography>
                        <TextField    label= "Say something about this post..."  fullWidth value={userUpdatePost.description} name="description" variant="filled"
                                    onChange={(e) =>
                                        setUserupdetePost((prev) => ({ ...prev, description: e.target.value }))
                                      }
                        />
                        <input  type="file" fullWidth name="profile" accept="jpg" onChange={handleUploadfile}/>
                      {userUpdatePost.profile && !file ? (
                        <img src={userUpdatePost.profile} width={"30%"} />
                    ) : file && (
                        file && <img src={window.URL.createObjectURL(file)} width={"30%"} />
                    )}
                        <Button  variant="outlined" type="submit" fullWidth>Update</Button>    
                </form>
       </div>
    </Dialog>
    </div>
  );
}