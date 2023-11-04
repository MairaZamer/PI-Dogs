import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import validation from "./validation";
import { createAllDogs } from "../../redux/actions";
import style from './createForm.module.css'

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
            dispatch(createAllDogs({
                ...formData,
                height: `${formData.minHeight} - ${formData.maxHeight}`,
                weight: `${formData.minWeight} - ${formData.maxWeight}`,
            }));
        } else {
            alert('Por favor, complete todos los campos correctamente');
        }
    }

    return (
        <div className={style.main}>
            <h1 className={style.mainTitle}>Crea a tu perrito♥</h1>
            <form className={style.container} onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                <label htmlFor=""> Name: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <p style={{ color: 'white', fontSize: '13px' }}>{errors.name}</p>}
                </div>
                <div className={style.formGroup}>
                <label htmlFor=""> Min height </label>
                <input type="text" name="minHeight" value={formData.minHeight} onChange={handleChange} />
                {errors.minHeight && <p style={{ color: 'white', fontSize: '13px' }}>{errors.minHeight}</p>}
                </div>
                <div className={style.formGroup}>
                <label htmlFor=""> Max height </label>
                <input type="text" name="maxHeight" value={formData.maxHeight} onChange={handleChange} />
                {errors.maxHeight && <p style={{ color: 'white', fontSize: '13px' }}>{errors.maxHeight}</p>}
                </div>
                <div className={style.formGroup}>
                <label htmlFor=""> Min weight </label>
                <input type="text" name="minWeight" value={formData.minWeight} onChange={handleChange} />
                {errors.minWeight && <p style={{ color: 'white', fontSize: '13px' }}>{errors.minWeight}</p>}
                </div>
                <div className={style.formGroup}>
                <label htmlFor=""> Max weight </label>
                <input type="text" name="maxWeight" value={formData.maxWeight} onChange={handleChange} />
                {errors.maxWeight && <p style={{ color: 'white', fontSize: '13px' }}>{errors.maxWeight}</p>}
                </div>
                <div className={style.formGroup}>
                <label htmlFor=""> Life span </label>
                <input type="text" name="life_span" value={formData.life_span} onChange={handleChange} />
                {errors.life_span && <p style={{ color: 'white', fontSize: '13px' }}>{errors.life_span}</p>}
                </div>
                <div className={style.formGroup}>
                <label htmlFor=""> Temperament </label>
                <select  onChange={handleChange}>
                    {newTemperament.map((temperament) =>
                        <option name={temperament.name} key={temperament.name} value={temperament.name}>
                            {temperament.name}
                        </option>
                    )}
                </select>
                </div>
                <button disabled={!formIsValid}>Crear</button>
            </form>
        </div>
    )

}

export default CreateForm;