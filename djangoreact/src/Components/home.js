import React, {useState} from 'react';
import {Link} from "react-router-dom"

//mui imports
import { Button , Typography, Grid} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

//components
import HeaderComponent from './header';
import CustomCard from './CustomCard';

//assets
import mountain from './assets/mountain.jpg'



function Home(){

    const [btnColor, setBtnColor] = useState("error")




    return (
        <>
        <HeaderComponent />
      
        
        
      <div style={{position: "relative"}}>
        <img src={mountain} style={{width: "100%"}}/>
        <div style={{zIndex: "100" , position: "absolute", width: "100%", top: "100px", textAlign: "center"}}>
            <Typography variant='h1'>
                Find your next home
            </Typography>
            <Button variant='contained' color='primary' size='large'>Search properties</Button>
        </div>
      </div>
        </>
      );
      
}

export default Home