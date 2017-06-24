import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const RedBike = function RedBike(props) {
  const { dispatch, redBikeNumber } = props;
  return (
    <div>
      <h1>this is red Bike</h1>
      <Button onClick={() => dispatch({ type: 'addNumber', payload: 1 })}>Click me add numbers</Button>
      { redBikeNumber }
    </div>
  );
};

RedBike.propTypes = {
  dispatch: PropTypes.func.isRequired,
  redBikeNumber: PropTypes.number.isRequired,
};

const RedBikeContainer = connect(state =>
  ({ redBikeNumber: state.RedBike }))(RedBike);

export default RedBikeContainer;

// dispatch({ type: 'addNumber', payload: 1 })
