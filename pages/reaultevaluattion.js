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
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

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
  createData('Sov Saren', 10, 30, 60, 100,1),
  createData('Rati',10, 30, 60, 100,1),
  createData('Dyna', 10, 30, 60, 100,1),
  createData('Sreydet',10, 30, 60, 100,1),
  createData('Danit', 10, 30, 60, 100,1),
  createData('Pina', 10, 30, 60, 100,1),
  createData('Both', 10, 30, 60, 100,1),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const filter = createFilterOptions();
export default function CustomizedTables() {
  const classes = useStyles();
  const [value, setValue] = React.useState({
    name: ''
  });
  return (
       <div>
          <ButtonAppBar text="Reault evaluattion"></ButtonAppBar>
                <div style={{width:'80%',marginLeft:'auto',marginRight:'auto'}}>
            
                  <div style={{float: "left",paddingBottom:40}}>
                 
                  <ChooseClass ></ChooseClass> 
                  </div>
                  <div style={{float: "left",marginBottom:10,marginLeft:340,}}>
                  <Paper>
                  <ChooseYears ></ChooseYears> 
                  </Paper>
                  </div>
                  </div>
            
            
      
 
        <TableContainer component={Paper}  >
          
          <Table className={classes.table}  aria-label="customized table">
            <TableHead>
              <TableRow >
              <StyledTableCell  >    
                 <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if(newValue !==null){
          if (typeof newValue === 'string') {
            setValue({
              name: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              name: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }
        else{
          setValue({
            name: ''
          })
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            name: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={rows}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(option) => option.name}
      style={{ width: 160,height:50, }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search your Name" variant="outlined"  />
      )}
    /> 
    </StyledTableCell >
                <StyledTableCell align="right">Attensdance</StyledTableCell>
                <StyledTableCell align="right">Activity</StyledTableCell>
                <StyledTableCell align="right">Exam</StyledTableCell>
                <StyledTableCell align="right">Total Score</StyledTableCell>
                <StyledTableCell align="right">Rank</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.filter((item)=>item.name.includes(value.name)).map((row) => (
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