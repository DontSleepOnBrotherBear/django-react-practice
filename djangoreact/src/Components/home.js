import React from 'react';
import {Link} from "react-router-dom"

function Home(){


    return <div> 
        <h1>This is the home pageeee</h1>
        <br />
        <Link to='/login'>Login</Link>
        <br />
        <Link to='/listings'>Listings</Link>
    </div>;
}

export default Home