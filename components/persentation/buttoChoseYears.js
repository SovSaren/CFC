import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const options = ['January 2021-2022', 'February 2021-2022','March 2021-2022','April 2021-2022',
'May 2021-2022', 'June 2021-2022', 'July 2021-2022','August 2021-2022','Spetember 2021-2022' ,
'October 2021-2022','Noveber 2021-2022','December 2021-2022'
]

export default function ChooseYears() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container direction="column" alignItems="center" style={{width:100}}>
      <Grid item xs={12} style={{width:100}}>
        <ButtonGroup variant="contained" color="white" ref={anchorRef} aria-label="split button">
          <Button onClick={handleClick} color="white" style={{width:350,height:50,fontSize:20,}}>{options[selectedIndex]}</Button>
          <Button
            color="white"
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon  />
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose} >
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 13}
                        selected={index === selectedIndex}
                        style={{backgroundColor:'rgba(167, 250, 246, 0.986)',width:250,}}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}