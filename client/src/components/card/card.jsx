import { Link } from "react-router-dom";


const Card = ({ id, name, weight, reference_image_id, temperament }) =>{

    return(
        <div>
            <Link to={`/detail/${id}`}>
                <h1> {name} </h1>
            </Link>
            <h3>{weight?.metric}</h3>
            <h3>{temperament}</h3>
            <img src={`https://api.thedogapi.com/v1/breeds${reference_image_id}.jpg`} />
        </div>
    )

}


export default Card;