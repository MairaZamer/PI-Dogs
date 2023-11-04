import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';


const Detail = () =>{
    const { id } = useParams()
    const [dogs, setDogs] = useState({});

    useEffect(()=>{
        async function character() {
            const response = await axios.get(`http://localhost:3001/dogs/${id}`)
            const result = response.data;
            setDogs(result)
        }
        character()
    }, [id]);

    return(
        <div>
            <div>
            <h3>Name: {dogs?.name}</h3>
            <h3>Height: {dogs.height?.metric}</h3>
            <h3>Weight: {dogs.weight?.metric}</h3>
            <h3>Life span: {dogs?.life_span}</h3>
            <h3>Temperaments: {dogs?.temperament}</h3>
            <img src={`https://cdn2.thedogapi.com/images/${dogs?.reference_image_id}.jpg` } width={400} height={250}/>
            </div>
            <button>
            <Link to='/home'>Return</Link>
            </button>
        </div>
    )
}


export default Detail;