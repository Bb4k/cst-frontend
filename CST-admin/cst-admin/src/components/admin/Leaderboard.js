import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {useState, useEffect} from 'react';
import axiosInstance from '../axios';


function Leaderboard() {

    const [leaderboardData, setLeaderboardData] = useState([])

    useEffect(() => {
      axiosInstance
      .get(`get-leaderboard/`+localStorage.getItem('companyId')+'/')
      .then((res) => {
                  setLeaderboardData(res.data)
      })
      .catch((function () {
              alert('Error trying to get the leaderboard')
      }));
    }, [])

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
        <TableRow align="center">
            <TableCell align="center">Rank</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboardData.map((row) => (
            <TableRow key={row.rank} align="center">
            <TableCell align="center">{leaderboardData.indexOf(row)+1}</TableCell>
            <TableCell align="center">{row.name}</TableCell>
            <TableCell align="center">{row.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Leaderboard;
