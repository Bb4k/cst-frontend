import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {useState, useEffect} from 'react';



function Leaderboard() {

    const [leaderboardData, setLeaderboardData] = useState([])

    useEffect(() => {

        let mounted = true
        if (mounted) {
            const data = [
                { rank: 1, name: 'John', points: 100 },
                { rank: 2, name: 'Jane', points: 90 },
                { rank: 3, name: 'Mike', points: 80 },
                { rank: 4, name: 'Sarah', points: 70 },
              ];
            setLeaderboardData(data)
        }
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
            <TableCell align="center">{row.rank}</TableCell>
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
