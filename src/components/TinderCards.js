import React,{ useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import '../resources/css/TinderCards.css';
import '../firebase'
import database from '../firebase';


const TinderCards = () => {
    const [people, setpeople] = useState([]);
    useEffect(()=>{
        database.collection('people').onSnapshot(snapshot=>(
            setpeople(snapshot.docs.map(doc=>doc.data()))
        ))
    },[]);
    return (
        <div>
            <div className="tindercards__container">
                {people.map((person)=>(
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={['left', 'right']}
                    >
                        <div
                            className="card"
                            style = {{backgroundImage: `url(${person.url})`}}
                        >
                        <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>          
        </div>
    )
}

export default TinderCards;
