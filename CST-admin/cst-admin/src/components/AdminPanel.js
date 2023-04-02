import React from "react";
import Header from "./Header";
import {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import AddUser from "./admin/AddUser"
import Leaderboard from "./admin/Leaderboard";
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import DeleteUser from "./admin/DeleteUser";

function AdminPanel() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
        // let mounted = true
        // if (mounted) {

        // }
        // else{
        //   return () => mounted = false;
        // }
        }, []);

    return (
    <React.Fragment>
        <Header/>
        <Typography Typography component="h1" variant="h4" align="center" style={{marginTop:'3%'}}>Admin Panel</Typography>
        <div style={{marginLeft:"25%", marginRight:"25%", marginTop:'3%'}}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <Card>
      <TabContext  value={value}>
        
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList style={{align:"center"}} onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Leaderboard" value="1" />
            <Tab label="Add user" value="2" />
            <Tab label="Delete user" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><Leaderboard/></TabPanel>
        <TabPanel value="2"><AddUser/></TabPanel>
        <TabPanel value="3"><DeleteUser/></TabPanel>
      </TabContext>
      </Card>
    </Box>
    </div>
      </React.Fragment>
    );
  }
  
  export default AdminPanel;
  