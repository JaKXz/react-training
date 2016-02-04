import React, { PropTypes } from 'react';

const Card = ({ topic, styles }) => {
  return (
    <div className="p2 m2 border inline-block">
      <div
        style={ styles.inner }
        className="flex-center flex white bg-gray">
        <div className="h1 center mx-auto flex">
          { topic }
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  topic: PropTypes.string.isRequired,
  styles: PropTypes.object
};

const styles = {
  inner: {
    width: 300,
    height: 300,
  },
};

Card.defaultProps = {
  topic: 'Topic',
  styles: styles
};


export default Card;
