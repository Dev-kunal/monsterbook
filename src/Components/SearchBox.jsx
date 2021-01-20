import React from 'react';
import "../Components/cardlist.css";

function SearchBox({placeholder,handlechange,searchvalue}) {
    return (
        <div>
             <input value={searchvalue} className='search' placeholder={placeholder} type="search" onChange={handlechange}/>
        </div>
    )
}


export default SearchBox
 