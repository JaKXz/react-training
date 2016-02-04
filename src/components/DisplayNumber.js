import React, { PropTypes } from 'react';

const DisplayNumber = ({ number }) => {
  return (
    <div className="p2 m2 border inline-block">
      <div
        style={ styles.inner }
        className="flex-center flex white bg-gray">
        <div className="h1 center mx-auto flex">
          { number }
        </div>
      </div>
    </div>
  );
};

DisplayNumber.propTypes = {
  number: PropTypes.number,
};
DisplayNumber.defaultProps = {
  number: -1,
};

const styles = {
  inner: {
    width: 300,
    height: 300,
  },
};

export default DisplayNumber;
