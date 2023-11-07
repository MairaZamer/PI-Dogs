import { Link } from "react-router-dom";
import style from './card.module.css'
import dogDefault from '../../image/descarga.jpg';

const Card = ({ id, name, weight, image_url, reference_image_id, temperament }) => {

    return (
        <div className={style.card}>
            <div>

                <div className={style.name}>
                    <Link className={style.linkcard} to={`/detail/${id}`}>
                        <h3 className={style.title}> {name} </h3>
                    </Link>
                </div>

                <div>
                    <img style={{ objectFit: "contain" }} src={reference_image_id ? `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg` : image_url ? image_url : dogDefault} alt="" width={400} height={250} />
                </div>

                <div className={style.boxinfo}>
                    <h4>Peso: {typeof weight === 'string' ? weight : weight?.metric}</h4>
                    <h4>Temperamentos: {temperament}</h4>
                </div>

            </div>
        </div>
    )

}


export default Card;