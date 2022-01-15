import { BUY_ICE_CREAM } from "./iceCreamType";

const initialState = {
  iceCreamCount: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        iceCreamCount: state.iceCreamCount - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
