import Card from "../card/card"

const Cards = ({newDogs}) => {
    return(
        <div>
            {newDogs?.map(( { id, name, height, weight, lifeSpan, reference_image_id, temperament } ) => {
                return (

                    <Card
                    key={id}
                    id={id}
                    name={name}
                    height={height}
                    weight={weight}
                    lifeSpan={lifeSpan}
                    reference_image_id={reference_image_id}
                    temperament={temperament}
                    />
                    
                )
            })}
        </div>
    )
}

export default Cards;