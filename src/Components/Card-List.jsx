import React from 'react'
import "../Components/cardlist.css";
import Card from './Card';
function CardList(props) {
    return (
        <div className="cardcontainer">
            {props.monsters.map(monster => {
                    return <Card key={monster.id} monster={monster} />
                })}
        </div>
    )
}

export default CardList
