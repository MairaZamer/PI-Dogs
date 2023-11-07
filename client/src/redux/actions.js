import { CREATE_DOG, GET_DOGS, GET_NAME, GET_TEMPERAMENTS, FILTER, FILTER_BD_API, ORDER, ORDER_WEIGHT } from "./actions-types";
import axios from "axios";

export const getDogs = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/dogs');
        return dispatch({
            type: GET_DOGS,
            payload: response.data,
        });
    };
};

export const getDogsByName = (name) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/dogs/name?name=${name}`);
        return dispatch({
            type: GET_NAME,
            payload: response.data,
        });
    };
};

export const createAllDogs = (formData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/dogs', formData);
            alert('Ya se creo el perro')
            return dispatch({
                type: CREATE_DOG,
                payload: response.data,
            });
        } catch (error) {
            alert(error.message)
        }
    }
}

export const temperamento = () => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/temperaments`);
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: response.data,
        });
    }
}

export const filterTemper = (name) => {
    return {
        type: FILTER,
        payload: name
    }
}

export const filterDbApi = (value) => {
    return {
        type: FILTER_BD_API,
        payload: value
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}

export const orderWeight = (Order) => {
    return {
        type: ORDER_WEIGHT,
        payload: Order,
    }
}
