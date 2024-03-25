import { ActionTypes } from "../redux/actions";

const initialState = {
  user: null,
  error: null,
  restaurants: [],
  menu: [],
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.Set_Rstros:
      return { ...state, restaurants: action.payload };
    case ActionTypes.Set_MenuItems:
      return { ...state, menu: action.payload };
    case ActionTypes.AddToCart:
      return { ...state, cart: [...state.cart, action.payload] };
    case ActionTypes.FinalCart:
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default rootReducer;
