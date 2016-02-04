import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increase, decrease } from '../reducers/counter';

import Button from '../components/Button';
import DisplayNumber from '../components/DisplayNumber';

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrease: () => dispatch(increase()),
    onDecrease: () => dispatch(decrease()),
  };
}

const Counter = (props) => {
  const { counter, onIncrease, onDecrease } = props;

  return (
    <div className="flex">
      <div>
        <DisplayNumber number={ counter } />
      </div>

      <div>
        <Button onClick={ onIncrease }>Increase</Button>
        <Button onClick={ onDecrease }>Decrease</Button>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
