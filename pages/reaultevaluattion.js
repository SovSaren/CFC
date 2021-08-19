import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ChooseClass from './../components/persentation/ButtonChooseClass'
import ChooseYears from './../components/persentation/buttoChoseYears'
import FreeSoloCreateOption from './../components/persentation/buttonSearch'
import ButtonAppBar from './../components/containers/Appbar'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name,attensdance, activity, exam, totalscore, rank,) {
  return { name,attensdance, activity, exam, totalscore, rank };
}

const rows = [
  createData('Sov Saren', 159, 6.0, 24, 4.0,3,4),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,3,6),
  createData('Eclair', 262, 16.0, 24, 6.0,2,7),
  createData('Cupcake', 305, 3.7, 67, 4.3,2,8),
  createData('Gingerbread', 356, 16.0, 49, 3.9,4,9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
       <div>
          <ButtonAppBar text="Reault evaluattion"></ButtonAppBar>
                <div style={{width:'80%',marginLeft:'auto',marginRight:'auto'}}>
            
                  <div style={{float: "left",marginBottom:10}}>
                  <Paper >
                  <ChooseClass ></ChooseClass> 
                  </Paper>
                  </div>
                  <div style={{float: "left",marginBottom:10,marginLeft:340,}}>
                  <Paper>
                  <ChooseYears ></ChooseYears> 
                  </Paper>
                  </div>
                  </div>
            
            
      
 
        <TableContainer component={Paper}>
          
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow >
              <StyledTableCell  > <FreeSoloCreateOption  data ={rows}/> </StyledTableCell>
                <StyledTableCell align="right">Attensdance</StyledTableCell>
                <StyledTableCell align="right">Activity</StyledTableCell>
                <StyledTableCell align="right">Exam</StyledTableCell>
                <StyledTableCell align="right">Total Score</StyledTableCell>
                <StyledTableCell align="right">Rank</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.attensdance}</StyledTableCell>
                  <StyledTableCell align="right">{row.activity}</StyledTableCell>
                  <StyledTableCell align="right">{row.exam}</StyledTableCell>
                  <StyledTableCell align="right">{row.totalscore}</StyledTableCell>
                  <StyledTableCell align="right">{row.rank}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
   </div>
  );
}