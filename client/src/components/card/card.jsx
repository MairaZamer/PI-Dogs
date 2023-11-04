import { Link } from "react-router-dom";
import style from './card.module.css'

const Card = ({ id, name, weight, reference_image_id, temperament }) => {

    return (
        <div className={style.card}>
            <div>

                <div className={style.name}>
                    <Link className={style.linkcard} to={`/detail/${id}`}>
                        <h3 className={style.title}> {name} </h3>
                    </Link>
                </div>

                <div>
                    <img src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`} alt="" width={400} height={250} />
                </div>

                <div className={style.boxinfo}>
                    <h4>Weight: {weight?.metric}</h4>
                    <h4>Temperaments: {temperament}</h4>
                </div>

            </div>
        </div>
    )

}


export default Card;