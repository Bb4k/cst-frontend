import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {useState, useEffect} from 'react';
import binImage from "../../images/bin.png"
import axiosInstance from '../axios';


function DeleteUser() {

    const [usersData, setUsersData] = useState([])

    const deleteUser = (e, userId) => {
      axiosInstance
      .delete(`delete-user/`+userId)
      .then((res) => {
                  alert('User deleted successfully')
      })
      .catch((function () {
              alert('Error trying to delete the user')
      }));
    }

    useEffect(() => {

      axiosInstance
      .get(`get-users/`+localStorage.getItem('companyId'))
      .then((res) => {
                  setUsersData(res.data)
      })
      .catch((function () {
              alert('Error trying to get the users')
      }));
      }, [usersData])

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
            <TableCell align="center">{row.first_name}</TableCell>
            <TableCell align="center">{row.last_name}</TableCell>
            <TableCell align="center">{row.email}</TableCell>
            <TableCell align="center"><img onClick={(e, userId) => deleteUser(e, row.id)} style={{width:20, height: 20}} src={binImage}></img></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DeleteUser;
