import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import dogDefault from '../../image/descarga.jpg';
import style from './detail.module.css'


const Detail = () => {
    const { id } = useParams()
    const [dogs, setDogs] = useState({});

    useEffect(() => {
        async function character() {
            const response = await axios.get(`http://localhost:3001/dogs/${id}`)
            const result = response.data;
            setDogs(result)
        }
        character()
    }, [id]);

    return (
        <div className={style.conteiner}>
            <div>
                <h3 className={style.title}> {dogs?.name} </h3>
                <h3>Altura: {typeof dogs?.height !== 'object'  ? dogs?.height : dogs.height?.metric}</h3>
                <h3>Peso: {typeof dogs?.weight !== 'object' ? dogs?.weight : dogs.weight?.metric}</h3>
                <h3>Años de vida: {dogs?.life_span}</h3>
                <h3>Temperamentos: {dogs?.temperament}</h3>
                <br/>
                <img style={{ objectFit: "contain" }} src={dogs.reference_image_id ? `https://cdn2.thedogapi.com/images/${dogs?.reference_image_id}.jpg` : dogs?.image_url ? dogs?.image_url : dogDefault} width={500} height={350} />
                <br/>
            <div>
            <button className={style.button}>
                <Link to='/home'>Return</Link>
            </button>
            </div>
            </div>
        </div>
    )
}


export default Detail;