import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import validation from "./validation";
import { createAllDogs } from "../../redux/actions";
import style from './createForm.module.css'
import { Link } from "react-router-dom";

const CreateForm = () => {
    const newTemperament = useSelector((state) => state?.temperaments)
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
    const [formIsValid, setFormIsValid] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        life_span: "",
        temperament: [],
    })

    const handleChange = (event) => {
        if (event.target.name === "temperament") {
            setFormData({
                ...formData,
                [event.target.name]: [...formData.temperament, event.target.value]
            });
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
            setErrors(validation({
                ...formData,
                [event.target.name]: event.target.value,
            }));
        }
    }

    const validateForm = () => {
        return (
            !errors.name &&
            !errors.minHeight &&
            !errors.maxHeight &&
            !errors.minWeight &&
            !errors.maxWeight &&
            !errors.life_span
        );
    }

    useEffect(() => {
        setFormIsValid(validateForm());
    }, [errors]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formIsValid) {
            const dog = {
                name: formData.name,
                height: `${formData.minHeight} - ${formData.maxHeight}`,
                weight: `${formData.minWeight} - ${formData.maxWeight}`,
                life_span: formData.life_span,
                temperament: formData.temperament,
            }
            dispatch(createAllDogs(dog));
        } else {
            alert('Por favor, complete todos los campos correctamente');
        }
    }

    return (
        <div className={style.main}>
            <h1 className={style.mainTitle}>Crea a tu perrito♥</h1>
            <form className={style.container} onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor=""> Nombre: </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p style={{ color: 'white', fontSize: '13px' }}>{errors.name}</p>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor=""> Altura mínima: </label>
                    <input type="text" name="minHeight" value={formData.minHeight} onChange={handleChange} />
                    {errors.minHeight && <p style={{ color: 'white', fontSize: '13px' }}>{errors.minHeight}</p>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor=""> Altura máxima: </label>
                    <input type="text" name="maxHeight" value={formData.maxHeight} onChange={handleChange} />
                    {errors.maxHeight && <p style={{ color: 'white', fontSize: '13px' }}>{errors.maxHeight}</p>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor=""> Peso mínimo: </label>
                    <input type="text" name="minWeight" value={formData.minWeight} onChange={handleChange} />
                    {errors.minWeight && <p style={{ color: 'white', fontSize: '13px' }}>{errors.minWeight}</p>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor=""> Peso máximo: </label>
                    <input type="text" name="maxWeight" value={formData.maxWeight} onChange={handleChange} />
                    {errors.maxWeight && <p style={{ color: 'white', fontSize: '13px' }}>{errors.maxWeight}</p>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor=""> Años de vida: </label>
                    <input type="text" name="life_span" value={formData.life_span} onChange={handleChange} />
                    {errors.life_span && <p style={{ color: 'white', fontSize: '13px' }}>{errors.life_span}</p>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor=""> Temperamentos: </label>
                    <select name="temperament" onChange={handleChange}>
                        {newTemperament.map((temperament) =>
                            <option name={temperament.name} key={temperament.name} value={temperament.name}>
                                {temperament.name}
                            </option>
                        )}
                    </select>
                    {formData.temperament.length > 0 && <p>{formData.temperament.join(',')}</p>}
                </div>
                <button disabled={!formIsValid}>Crear</button>
                <button>
                    <Link to={'/home'} > Home </Link>
                </button>
            </form>
        </div>
    )

}

export default CreateForm;