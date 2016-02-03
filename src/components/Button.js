import React, {PropTypes} from 'react';

const Button = ({text, type, clickMe}) => {
  return (
    <button className={`h1 btn btn-primary ${types[type]}`}
      style={styles}
      onClick={clickMe}>
      {text}
    </button>
  );
};

Button.displayName = 'Button';

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickMe: PropTypes.func,
  type: PropTypes.string
};

Button.defaultProps = {
  type: 'info',
  clickMe: () => { console.log ('LOL'); }
};

export default Button;

const types = {
  info: 'mb1 bg-blue',
  danger: 'mb1 bg-red'
};

const styles = {
};
