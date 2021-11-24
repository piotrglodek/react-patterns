import PropTypes from 'prop-types';
import '../../../sass/components/_card.sass';

const statutes = { Alive: '🟢', Dead: '💀', unknown: '👻' };

const Card = ({ name, image, status, ...props }) => {
  return (
    <div className='card' {...props}>
      <img src={image} alt='' className='card__image' />
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
