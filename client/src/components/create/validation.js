const validation = (formData) =>{

    const errors = {};
    
    if (!/^[A-Za-z]{1,25}$/i.test(formData.name)) {
        errors.name = 'Debe tener solo letras y no superar los 25 caracteres'
    }
    if (!/^\d{1,3}$/.test(formData.minHeight)) {
        errors.minHeight= 'La altura minima debe ser un numero de hasta 3 digitos';
    }
    if (formData.minHeight >= formData.maxHeight) {
        errors.minHeight = 'La altura minima no puede ser mayor o igual a la altura maxima'
    }
    if (!/^\d{1,3}$/.test(formData.maxHeight)) {
        errors.maxHeight = 'La altura maxima debe ser un numero de hasta 3 digitos';
    }
    if (!/^\d{1,3}$/.test(formData.minWeight)) {
        errors.minWeight = 'El peso minimo debe ser un numero de hasta 3 digitos';
    }
    if (!/^\d{1,3}$/.test(formData.maxWeight)) {
        errors.maxWeight = 'El peso maximo debe ser un numero de hasta 3 digitos';
    }
    if (!/^\d{1,3}$/.test(formData.life_span)) {
        errors.life_span = 'Los años de vida deben ser un numero de hasta 3 digitos';
    }
};

export default validation;