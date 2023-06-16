import React, {useState} from 'react';
import {Link} from "react-router-dom"
import { Button , Typography} from '@mui/material';


function CustomCard() {

    const [btnColor, setBtnColor] = useState("error")


    return <div style={{border: "2px solid black"}}> 
    <Typography variant="h1">
        Home
    </Typography>
    <Button 
        onClick={()=>setBtnColor("success")} 
        color={btnColor} 
        variant="contained" 
        size="large">
            Button Text
    </Button>
</div>;;
}

export default CustomCard;