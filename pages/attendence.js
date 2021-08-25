
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
    width:'100%',
    marginLeft:'auto',
    marginRight:'auto'

    
  }
});

function createData(name, sex, date1, date2,
   date3,date4,date5,date6,date7,date8,date9,
   date10,date11,date12,date13,date14,date15,
   date16,date17,date18,date19,date20,date21,
   date22,date23,date24,date25,date26,date27,
   date28,date29,date30) {

    return { name, sex, date1, date2,
       date3,date4,date5,date6,date7,
       date8,date9,date10,date11,date12,
       date13,date14,date15,date16,
       date17,date18,date19,date20,date21,
       date22,date23,date24,date25,
       date26,date27,date28,date29,date30 };
  }

const rows = [
  createData('saren', "M", 'p', null,null, null, 'p', null,null,
   null,null, null,'p', null, null, null,'p'),

  createData('Both', "M", 'p', null,null, null, 'p', null,null,
   null,null, null,'p', null, null, null,null),

  createData('Dyna',"M",   'p', null,null, null, 'p', null,null,
  null,null, null,'p', null, null, null,null),

  createData('Danit',"F",    'p', null,null, null, 'p', null,null,
  null,null, null,'p', null, null, null,null, null, 'p', null,
  'p', null,null, null,null, null,'p', null,null, null, 'p',
   null,null, null,'p'),
     
  createData('Pina', "F",  'p', null,null, null, 'p', null,null,
  null,null, null,'p', null, null, null,null, null, 'p', null,
  'p', null,null, null,null, null,'p', null,null, null, 'p',
   null,null, null,'p'),
   createData('Rati', "F",  'p', null,null, null, 'p', null,null,
   null,null, null,'p', null, null),
   createData('Seth', "M",  'p', null,null, null, 'p', null,null,
   null,null, null,'p', null, null),
   createData('Pork', "M",  'p', null,null, null, 'p', null,null,
   null,null, null,'p', null, null),
   createData(' Neang', "F",  'p', null,null, null, 'p', null,null,
   null,null, null,'p', null, null),
   
];

export default function BasicTable() {
  const classes = useStyles();

  return (
      <diV className ={classes.root}>
        <ButtonAppBar text="Class Timline"></ButtonAppBar>
        <div style={{float: "left" ,marginBottom:30,}}>
            <ChooseClass ></ChooseClass>
           
       </div>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Sex</TableCell>
                        <TableCell align="right">1</TableCell>
                        <TableCell align="right">2</TableCell>
                        <TableCell align="right">3</TableCell>
                        <TableCell align="right">4</TableCell>
                        <TableCell align="right">5</TableCell>
                        <TableCell align="right">6</TableCell>
                        <TableCell align="right">7</TableCell>
                        <TableCell align="right">8</TableCell>
                        <TableCell align="right">9</TableCell>
                        <TableCell align="right">10</TableCell>
                        <TableCell align="right">11</TableCell>
                        <TableCell align="right">12</TableCell>
                        <TableCell align="right">13</TableCell>
                        <TableCell align="right">14</TableCell>
                        <TableCell align="right">15</TableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.sex}</TableCell>
                        <TableCell align="right">{row.date1}</TableCell>
                        <TableCell align="right">{row.date2}</TableCell>
                        <TableCell align="right">{row.date3}</TableCell>
                        <TableCell align="right">{row.date4}</TableCell>
                        <TableCell align="right">{row.date5}</TableCell>
                        <TableCell align="right">{row.date6}</TableCell>
                        <TableCell align="right">{row.date7}</TableCell>
                        <TableCell align="right">{row.date8}</TableCell>
                        <TableCell align="right">{row.date9}</TableCell>
                        <TableCell align="right">{row.date10}</TableCell>
                        <TableCell align="right">{row.date11}</TableCell>
                        <TableCell align="right">{row.date12}</TableCell>
                        <TableCell align="right">{row.date13}</TableCell>
                        <TableCell align="right">{row.date14}</TableCell>
                        <TableCell align="right">{row.date15}</TableCell>
                        
                        
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
     </diV>
  );
}