import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../../redux/cake/cakeActions";

const HookCakeContainer = () => {
  const cake = useSelector((state) => state.cake.cakeCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of Cakes : {cake}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
    </div>
  );
};

export default HookCakeContainer;
