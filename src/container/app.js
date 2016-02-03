import React, {PropTypes} from 'react';

import ButtonGroup from '../components/Button-Group';
import Card from '../components/Card';

const AppContainer = () => {
  return (
    <div>
      <Card />
      <ButtonGroup />
    </div>
  );
};

AppContainer.displayName = 'AppContainer';

AppContainer.propTypes = {

};

AppContainer.defaultProps = {

};

export default AppContainer;
