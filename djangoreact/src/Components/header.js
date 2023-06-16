import React from 'react';
import {Link, useNavigate} from "react-router-dom"
import { Button , Typography, Grid} from '@mui/material';
import CustomCard from './CustomCard';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


function HeaderComponent(){

    const navigate = useNavigate();

    return <>
    <AppBar position="static">
        <Toolbar>
            <div style={{marginRight: 'auto'}}>
                <Button color="inherit" onClick={()=>navigate('/')}>Listings</Button>
                <Button color="inherit">Agencies</Button>
            </div>
            <div style={{marginLeft: 'auto'}}>
                <Button color="inherit"><Typography variant='h4'>Add Property</Typography></Button>
                <Button color="inherit" onClick={()=>navigate('/login')}>Login</Button>
                
            </div>
    
         
        </Toolbar>
      </AppBar>
      </>


}

export default HeaderComponent;