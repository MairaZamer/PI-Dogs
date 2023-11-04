import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../components/cards/cards'
import SearchBar from "../../components/searchBar/searchBar";
import { useEffect, useState } from 'react';
import { filterDbApi, filterTemper, getDogs, orderCards, orderWeight, temperamento } from '../../redux/actions';

import style from './home.module.css'

//Paginado:

const DOGS_POR_PAG = 8; 

const Home = () => {
    const newTemperament = useSelector((state) => state?.temperaments);
    const allDogs= useSelector((state) => state?.newDogs);
    const [temperaments, setTemperaments] = useState("");
    const totalDogs = allDogs?.length;
    const totalDogsPage = Math.ceil(totalDogs / DOGS_POR_PAG);
    const [currentPage, setCurrentPage] = useState(0);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getDogs());
    }, [dispatch]);

    const startDogs = currentPage * DOGS_POR_PAG;
    const endDogs = startDogs + DOGS_POR_PAG;
    const dogsToDisplay = allDogs?.slice(startDogs, endDogs);

    const nextHandler = () =>{
        if(currentPage < totalDogsPage -1 ){
            setCurrentPage(currentPage + 1)
        }
    };

    const prevHandler = () => {
        if (currentPage > 0){
            setCurrentPage(currentPage -1)
        }
    };

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value))
    };

    const handleOrderWeight = (event) =>{
        dispatch(orderWeight(event.target.value)) 
    };

    const handleOrderTotal = (event) =>{
        const dbapi = event.target.value
        dispatch(filterDbApi(dbapi))
    };

    const handlerFilter = (event) => {
        const select = event.target.value;
        setTemperaments(select);
        dispatch(filterTemper(select))
    };

    useEffect(()=>{
        dispatch(temperamento())
    }, []);

    return(

        <div>
        <div>
        <SearchBar/>
        </div>
            <div >
            <select onChange={handleOrder}>
                <option value="A" > A - Z </option>
                <option value="D" > Z - A </option>
            </select>

            <select onChange={handleOrderTotal}>
                <option value="api" > API </option>
                <option value="db" > DB </option>
            </select>

            <select onChange={handleOrderWeight}>
                <option value="MaxMin" > Max/Mi n</option>
                <option value="PesoMax" > PesoMax </option>
                <option value="PesoMin" > PesoMin </option>
            </select>

            <select onChange={handlerFilter}>
              {newTemperament.map(temperament => 
              <option value={temperament.name} name={temperament.name} key={temperament.name}>
                {temperament.name}
            </option>
            )}
            </select>
            </div>

            <div>
            <Cards newDogs={dogsToDisplay}/>
            </div>
            
            <div>
            <button onClick={prevHandler} disabled={currentPage === 0} >Back</button>
            <span> pagina: {currentPage +1} de {totalDogsPage} </span>
            <button onClick={nextHandler} disabled={currentPage === totalDogsPage -1} >Next</button>
            </div>

        </div>
    )

}

export default Home;