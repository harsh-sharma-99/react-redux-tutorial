import { BUY_CAKE } from "./cakeType";

const initialState = {
  cakeCount: 100,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        cakeCount: state.cakeCount - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
