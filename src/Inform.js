import React, {useEffect, useState} from "react";
import axios from "axios";

const Inform = () => {
    const [cats, setCats] = useState([]) //breeds
    const [cat, setCat] = useState({})

    const catInfo = (e) => {
        //1
       // const selected = cats.filter(item => item.id === e.target.value)
       //  setCat(selected[0])
        //2
        const selected = cats.find(item => item.id === e.target.value)
        setCat(selected)
    }
    useEffect(() => {
        axios('https://api.thecatapi.com/v1/breeds')
            .then(({data}) => setCats(data))
    }, [])
    return (
        <div>
            <select onChange={catInfo}>
                <option selected disabled>Choose...</option>
                {
                    cats.map(el=>
                       <option  value={el.id} key={el.id}>{el.name}</option>
                    )
                }
            </select>
            {
                cat.id &&
                <div>
                    <img src={cat.image.url} alt="" width='300px'/>
                    <div>Name: {cat.name}</div>
                    <div>Description: {cat.description}</div>
                </div>
            }
        </div>
    );
};

export default Inform











