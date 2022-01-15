import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../../redux/cake/cakeActions";

const CakeContainer = (props) => {
  return (
    <div>
      <h1>Number of Cakes : {props.cakeCount}</h1>
      <button onClick={props.buyCake}>Buy Cakes</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cakeCount: state.cake.cakeCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
