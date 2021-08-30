import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ChooseClass from './../components/persentation/ButtonChooseClass'
import ButtonAppBar from './../components/containers/Appbar'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root :{
    marginTop:20,
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto'

    
  }
});

function createData(name, monday, tuesday, wednesday, thursday,friday,saturday) {
    return { name, monday, tuesday, wednesday, thursday,friday,saturday };
  }

const rows = [
  createData('Time 7:00-7:50', "7A", "7B", null,"7C", "7D"),
  createData('Time 8:00-8:50', "7A", null,"7B", null,"7C","7D"),
  createData('Time 9:00-9:50',null, "7E", "7F", null, "7G","7H"),
  createData('Time 10:00-10:50',null, "7E", "7J", "7G", "7H", "7I"),
  createData('Time 11:00-11:50', null, null,null,"7F" ,"7J","7I"),
];
const row = [
  createData('Time 7:00-7:50', "12B", "7B", null,"7C", "7D"),
  createData('Time 8:00-8:50', "7A", null,"7B", null,"7C","7D"),
  createData('Time 9:00-9:50',null, "7E", "7F", null, "7G","7H"),
  createData('Time 10:00-10:50',null, "7E", "7J", "7G", "7H", "7I"),
  createData('Time 11:00-11:50', null, null,null,"7F" ,"7J","7I"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
      <diV className ={classes.root}>
        <ButtonAppBar text="Class Timline"></ButtonAppBar>
        <div style={{float: "left",paddingBottom:30}}>
            <ChooseClass ></ChooseClass>
           
       </div>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Times/Day</TableCell>
                        <TableCell align="right">Monday</TableCell>
                        <TableCell align="right">Tuesday</TableCell>
                        <TableCell align="right">Wednesday</TableCell>
                        <TableCell align="right">Thursday</TableCell>
                        <TableCell align="right">Friday</TableCell>
                        <TableCell align="right">Saturday</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.monday}</TableCell>
                        <TableCell align="right">{row.tuesday}</TableCell>
                        <TableCell align="right">{row.wednesday}</TableCell>
                        <TableCell align="right">{row.thursday}</TableCell>
                        <TableCell align="right">{row.friday}</TableCell>
                        <TableCell align="right">{row.saturday}</TableCell>
                        
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
     </diV>
  );
}

