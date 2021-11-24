import PropTypes from 'prop-types';
import Card from './Card';
import '../../../sass/components/_cardList.sass';

const CardList = ({ characters }) => (
  <div className='card-list'>
    {characters.map(character => (
      <Card
        key={character.id}
        name={character.name}
        image={character.image}
        status={character.status}
      />
    ))}
  </div>
);

const baseShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

CardList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      origin: baseShape.isRequired,
      location: baseShape.isRequired,
      episode: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired
  ).isRequired,
};

export default CardList;
