import React, {useEffect, useState} from "react";
import axios from "axios";
// Создайте компонент, который выводит имена и почты всех польхоователей
// https://jsonplaceholder.typicode.com/
//- Создайте компонент, который содержит input и две кнопки
// Вывести имя пользователя с сервиса swapi.dev, id которого напечатан в input
// так же есть возможность переключать пользователя нажатием на кнопки по убыванию и возрастанию соответственно
//- Воспользуйтесь api https://docs.thecatapi.com/
// Отобразить выпадающий список с породами котов. вывести информацию о породе включая фото
//- Воспользуйтесь api https://pokeapi.co/ и выведите фото всех покемонов включая их имена
//- Каждое задание должно быть в виде отдельного компонента и выведено в App одновременно. Результат загрузить на один из облачных сервисов на выбор
const Inform = () => {
    const [input, setInput] = useState([]) //breeds
    const [cat, setCat] = useState([])
    const [information, setInformation] = useState(false)
    const [image, setImage] = useState({})

    useEffect(() => {
        axios('https://https://api.thecatapi.com/v1/images/search?breed_id=beng')
            .then(({data}) => setImage(data))
    },[])
    useEffect(() =>{
        axios('https://api.thecatapi.com/v1/breeds')
            .then(({data}) => setCat(data))
    }, [])
    const catInfo = (e) => {
        setInformation(e.target.value)
    }
    // const imageCat = (e) => {
    //     setImage(e.target.url)
    // }
    return (
        <div >
            <select onChange={catInfo}>
                {
                    cat.map((el, idx) => {
                        return  <option  value={el.name}>{el.name}</option>
                    })
                }
            </select>
            {/*<div onChange={imageCat}>{image}</div>*/}
            <div>
                {
                    image.map(el => {
                        return <img src="" alt="" value={el.images}/>
                    })
                }
            </div>
        </div>

    )
}

export default Inform











