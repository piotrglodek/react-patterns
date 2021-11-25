import PropTypes from 'prop-types';
import Card from './Card';
import '../../../sass/components/_cardList.sass';

const CardList = ({ data }) => (
  <div className='card-list'>
    {data.results.map(character => (
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
  info: PropTypes.shape({
    count: PropTypes.number,
    next: PropTypes.string,
    pages: PropTypes.number,
    prev: PropTypes.any,
  }),
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      status: PropTypes.string,
      species: PropTypes.string,
      type: PropTypes.string,
      gender: PropTypes.string,
      image: PropTypes.string,
      url: PropTypes.string,
      created: PropTypes.string,
      origin: baseShape,
      location: baseShape,
      episode: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default CardList;
