const validacion = (formData) => {
  const errors = {};
  if (!/^[A-Za-z]{1,25}$/i.test(formData.name)) {
    errors.name = "Debe contener solo letras y no exceder los 25 caracteres";
  }
  if (!/^\d{1,3}$/.test(formData.minHeight)) {
    errors.minHeight = "La altura mínima debe ser un número de hasta 3 dígitos";
  }

  if (formData.minHeight <= formData.maxHeight) {
    errors.minHeight =
      "la altura minima no puede ser mayor o igual a la maxima";
  }

  if (!/^\d{1,3}$/.test(formData.maxHeight)) {
    errors.maxHeight = "La altura máxima debe ser un número de hasta 3 dígitos";
  }

  if (!/^\d{1,3}$/.test(formData.minWeight)) {
    errors.minWeight = "El peso mínimo debe ser un número de hasta 3 dígitos";
  }

  // Validación de peso máximo
  if (!/^\d{1,3}$/.test(formData.maxWeight)) {
    errors.maxWeight = "El peso máximo debe ser un número de hasta 3 dígitos";
  }

  // Validación de años de vida
  if (!/^\d{1,3}$/.test(formData.life_span)) {
    errors.life_span =
      "Los años de vida deben ser un número de hasta 3 dígitos";
  }

  return errors;
};

export default validacion;
