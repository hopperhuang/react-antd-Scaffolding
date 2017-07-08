import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const RedBike = function RedBike(props) {
  const { dispatch, bike } = props;
  return (
    <div>
      <h1>this is red Bike</h1>
      <Button onClick={() => dispatch({ type: 'bike-addNumber' })}>Click me add numbers</Button>
      { bike.number }
    </div>
  );
};

RedBike.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const RedBikeContainer = connect(state =>
  ({ bike: state.bike }))(RedBike);

export default RedBikeContainer;

// dispatch({ type: 'addNumber', payload: 1 })
