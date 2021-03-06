import React, {useEffect, useState} from "react";
import axios from "axios";

const Starwars = () => {
const [userId, setUserId] = useState(1)
    const [people, setPeople] = useState({})
const handleUser = (e) => {
    setUserId(e.target.value)
}
    const minus = () => {
        if (userId === 1) {
            setUserId(83)
        } else {
            setUserId(userId -1)
        }
    }
const plus = () => {
    if (userId === 83) {
        setUserId(1)
    } else {
        setUserId(userId +1)
    }
}
useEffect(() =>{
    axios(`https://swapi.dev/api/people/${userId}/`)
        .then(({data}) => setPeople(data))
}, [userId])
return(
    <div className='container' key={people.id}>
        <div className='box'>
            <button onChange={handleUser} onClick={minus} className='minus app'> - </button>
            <input type="text" value={userId} className='input' />
            <button onChange={handleUser} onClick={plus} className='plus app'> + </button>
            <div className='name'>{people.name}</div>
        </div>
    </div>
)
}


export default Starwars
