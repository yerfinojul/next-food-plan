import React, { useReducer, useContext } from 'react';

const FoodStateContext = React.createContext();
const FoodDispatchContext = React.createContext();

export const ACTIONS = {
  ADD_FOOD: 'ADD_FOOD',
  REMOVE_FOOD: 'REMOVE_FOOD',
  SET_FOODS: 'SET_FOODS',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_FOOD:
      return [...state, action.payload];
    case ACTIONS.REMOVE_FOOD:
      return state.filter((food) => food.id !== action.payload);
    case ACTIONS.SET_FOODS:
      return [...action.payload];
    default:
      throw new Error('Invalid action type', action.type);
  }
}

export const FoodProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <FoodDispatchContext.Provider value={dispatch}>
      <FoodStateContext.Provider value={state}>
        {children}
      </FoodStateContext.Provider>
    </FoodDispatchContext.Provider>
  );
};

export const useFood = () => useContext(FoodStateContext);
export const useFoodDispatch = () => useContext(FoodDispatchContext);
