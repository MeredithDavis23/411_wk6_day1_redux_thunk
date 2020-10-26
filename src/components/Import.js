import React, {useState, useEffect} from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Paper, Menu, MenuItem } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete"
import { makeStyles } from '@material-ui/core/styles';
import { MoreVert } from '@material-ui/icons'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  

const Import = (props) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [removedItem, setRemovedItem] = useState(null)

    useEffect(() => {
      console.log(removedItem)
    }, [removedItem])
      
    const handleClick = (index) => (event) => {
      setAnchorEl(event.currentTarget);
      setRemovedItem(index);
    };
    
    const handleClose = () => {
      setAnchorEl(null)
    }

    const classes = useStyles();


    return (
        <>
        <h2 style={{textAlign: "center"}}>
          Number of Makes: {props.makes.length}
        </h2>
        <Button onClick={props.fetchMakes} variant="contained" color="primary">
            Import 
        </Button>
        <Paper>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((car, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {car.MakeId}
              </TableCell>
              <TableCell align="right">{car.MakeName}</TableCell>
              <TableCell align="right">
                <MoreVert
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick(index)}
                  ></MoreVert>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <DeleteIcon
            onClick={(index) => props.deleteMakes(removedItem, index)}
          />
        </MenuItem>
      </Menu>
        </>
    )
}

export default Import