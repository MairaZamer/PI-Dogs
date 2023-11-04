import Card from "../card/card"
import style from './cards.module.css'

const Cards = ({newDogs}) => {
    return(
        <div >
        <div className={style.container}>
            {newDogs?.map(( { id, name, height, weight, life_span, reference_image_id, temperament } ) => {
                return (

                    <Card
                    key={id}
                    id={id}
                    name={name}
                    height={height}
                    weight={weight}
                    life_span={life_span}
                    reference_image_id={reference_image_id}
                    temperament={temperament}
                    />
                    
                )
            })}
        </div>
        </div>
    )
}

export default Cards;