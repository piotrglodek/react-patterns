import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../sass/components/_card.sass';

const statutes = { Alive: '🟢', Dead: '💀', unknown: '👻' };

const Card = ({ name, image, status, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  return (
    <div className='card' {...props}>
      {!loaded && <div className='card__placeholder'></div>}
      <img
        style={{ display: `${loaded ? 'block' : 'none'}` }}
        onLoad={handleLoad}
        src={image}
        alt={`${name} avatar`}
        className='card__image'
      />

      <div className='card__container'>
        <h6 className='card__title'>{name}</h6>
        <span className='card__status'>
          {statutes[status]}
          <span className='card__tooltip'>{status}</span>
        </span>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default Card;
