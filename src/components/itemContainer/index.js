import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../../redux/iceCream/iceCreamActions";
import { buyCake } from "./../../redux/cake/cakeActions";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item} </h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.cakeCount
    : state.iceCream.iceCreamCount;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFucntion = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFucntion,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
