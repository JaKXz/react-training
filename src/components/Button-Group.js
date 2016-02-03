import React from 'react';

import Button from './Button';

const ButtonGroup = () => {
  return (
    <div className={`flex flex-justify m2 flex-center`}>
      <Button
        text={`+`} />
      <span>Info</span>
      <Button
        text={`-`}
        type={`danger`} />
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
};

ButtonGroup.defaultProps = {
  type: ''
};

export default ButtonGroup;
