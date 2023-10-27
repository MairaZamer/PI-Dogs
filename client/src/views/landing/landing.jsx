import style from './landing.module.css'
import { useNavigate } from 'react-router-dom';
import dog from '../../image/dog.gif'

const Landing = () => {
     
    const navigate = useNavigate();
    const navigateHandler = () =>{
        navigate('/home');
    }

    return (
        <div>
            <h1 className={style.title}>Proyecto individual: dogs♥ </h1>
            <div className={style.img}>
            <img src= {dog} />
            </div>
            <div >
            <button className={style.button} onClick={navigateHandler}> 
                 Home 
            </button>
            </div>
        </div>
    )
}

export default Landing;