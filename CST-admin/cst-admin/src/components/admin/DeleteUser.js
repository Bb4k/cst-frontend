import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {useState, useEffect} from 'react';
import binImage from "../../images/bin.png"



function DeleteUser() {

    const [usersData, setUsersData] = useState([])

    const deleteUser = (e, userId) => {
      console.log("deleting " + userId)
    }

    useEffect(() => {

        let mounted = true
        if (mounted) {
            const userData = [
                { userId: 1, firstName: 'John', lastName: 'John', email: 'John@john.com' },
                { userId: 1, firstName: 'John', lastName: 'John', email: 'John@john.com' },
                { userId: 1, firstName: 'John', lastName: 'John', email: 'John@john.com' },
                { userId: 1, firstName: 'John', lastName: 'John', email: 'John@john.com' },
              ];
             setUsersData(userData)
        }
      }, [])

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
        <TableRow align="center">
            <TableCell align="center">First name</TableCell>
            <TableCell align="center">Last name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersData.map((row) => (
            <TableRow key={row.rank} align="center">
            <TableCell align="center">{row.firstName}</TableCell>
            <TableCell align="center">{row.lastName}</TableCell>
            <TableCell align="center">{row.email}</TableCell>
            <TableCell align="center"><img onClick={(e, userId) => deleteUser(e, row.userId)} style={{width:20, height: 20}} src={binImage}></img></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DeleteUser;
