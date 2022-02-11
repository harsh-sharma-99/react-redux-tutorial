import React from "react";
import { connect } from "react-redux";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item} </h2>
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

export default connect(mapStateToProps)(ItemContainer);
