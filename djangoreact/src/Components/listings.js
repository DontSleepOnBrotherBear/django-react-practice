import React from 'react';

function Listings(){

    fetch('http://127.0.0.1:8000/api/').then((response) => response.json()).then(data=>console.log(data))



    return <div> 
        <h1>This is the listings pageeee</h1>
    </div>;
}

export default Listings