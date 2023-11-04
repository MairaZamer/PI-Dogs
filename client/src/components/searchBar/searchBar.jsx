import { useState } from 'react';
import { getDogsByName, getDogs} from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './searchBar.module.css'

const SearchBar = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleOnClick = async() =>{
      try {
        const response = await dispatch(getDogsByName(name));

          if(response && response.payload.length === 0) {
            alert(`No se encontraron perros con el nombre "${name}"`);
            }
          setName('');
        } catch (error) {
          console.error('Error:', error);
        }
    };

    const handleName = (event) =>{
      setName(event.target.value)
    }

   const reset = () =>{
     dispatch(getDogs());
    }

    return(
        <div>
        <div >
        <input type='text' onChange={handleName} value={name} />
        <button className={style.button} onClick={handleOnClick}>Buscar</button>
        <button onClick={reset} >Resetear</button>
        <button>
        <Link to= '/form'>Crear Perro</Link>
        </button>
        </div>
        </div>
    )
}

export default SearchBar;