import React from 'react'
import "../Components/cardlist.css";
function Card(props) {
    return (
        <div className='carditem'>
            <img alt="robo-img" src={`https://robohash.org/${props.monster.id}?set=set1&size=150x150`}/>
            <h4>{props.monster.name}</h4>
            <h6>{props.monster.email}</h6>
        </div>
    )
}

export default Card
