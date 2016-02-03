import React, { PropTypes } from 'react';

const Card = ({title, text, backgroundImg}) => {
  return (
    <div className="md-col-6">
      <div className="p2 bg-white border rounded">
        <img src={backgroundImg}
          className="mb2 mx-auto block" />
        <h1 className="h2 mt0">{title}</h1>
        <p className="mb0">{text}</p>
      </div>
    </div>
  );
};

Card.displayName = 'Card';

Card.propTypes = {
  title: PropTypes.string,
  backgroundImg: PropTypes.string,
  text: PropTypes.string
};

Card.defaultProps = {
  title: 'Your default title!',
  backgroundImg: 'http://unsplash.it/400?random',
  text: 'Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.'
};

export default Card;
