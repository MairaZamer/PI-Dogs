import {
  CREATE_DOG,
  GET_DOGS,
  GET_NAME,
  GET_TEMPERAMENTS,
  FILTER,
  ORDER,
  ORDER_WEIGHT,
  FILTER_BD_API,
} from "./actions-types";

let inicialState = {
  dogs: [],
  newDogs: [],
  temperaments: [],
  tempHome: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case CREATE_DOG:
      return {
        ...state,
        dogs: [...state.dogs, action.payload],
        newDogs: [...state.newDogs, action.payload],
      };
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        newDogs: action.payload,
      };
    case GET_NAME:
      return {
        ...state,
        dogs: action.payload,
        newDogs: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case FILTER_BD_API:
      let perros;
      if (action.payload === "api") {
        perros = state.dogs.filter((dog) => dog.id.toString().length < 4);
      } else if (action.payload === "db") {
        perros = state.dogs.filter((dog) => dog.id.toString().length > 4);
      }
      return {
        ...state,
        newDogs: [...perros],
      };
    case FILTER:
      const copyDogs = [...state.dogs];
      const response = [
        ...copyDogs.filter((dog) => {
          return (
            dog.temperament &&
            dog.temperament
              .split(",")
              .map((element) => element.trim())
              .includes(action.payload.trim())
          );
        }),
      ];
      return {
        ...state,
        newDogs: response,
      };
    case ORDER:
      if (action.payload === "A") {
        const allDogsCopy = [...state.newDogs];
        const result = allDogsCopy.sort((a, b) => a.name.localeCompare(b.name));
        return {
          ...state,
          newDogs: [...result],
        };
      }
      if (action.payload === "D") {
        const allDogsCopy = [...state.newDogs];
        const result = allDogsCopy.sort((a, b) => b.name.localeCompare(a.name));
        return {
          ...state,
          newDogs: [...result],
        };
      }
    case ORDER_WEIGHT:
      let orderWeight;
      if (action.payload === "MaxMin") {
        orderWeight = [...state.dogs];
      } else if (action.payload === "PesoMax") {
        orderWeight = [...state.newDogs].sort((a, b) => {
          const weightA = parseInt(a.weight.metric.split(" - ")[1]);
          const weightB = parseInt(b.weight.metric.split(" - ")[1]);
          return weightB - weightA;
        });
      } else if (action.payload === "PesoMin") {
        orderWeight = [...state.newDogs].sort((a, b) => {
          const weightA = parseInt(a.weight.metric.split(" - ")[1]);
          const weightB = parseInt(b.weight.metric.split(" - ")[1]);
          return weightA - weightB;
        });
      }

      return {
        ...state,
        newDogs: orderWeight,
      };

    default:
      return state;
  }
};

export default rootReducer;
