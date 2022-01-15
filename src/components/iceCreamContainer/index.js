import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { buyIceCream } from "./../../redux/iceCream/iceCreamActions";

const IceCreamContainer = () => {
  const iceCream = useSelector((state) => state.iceCream.iceCreamCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Ice-Creams : {iceCream}</h1>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice-Creams</button>
    </div>
  );
};

export default IceCreamContainer;
