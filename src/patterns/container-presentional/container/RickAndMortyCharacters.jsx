import CardList from '../components/CardList';
// hook
import useFetch from '../../../hooks/useFetch';
// api
const API_URL = `https://rickandmortyapi.com/api/character`;

export const RickAndMortyCharacters = () => {
  const [data] = useFetch(API_URL);

  return data && <CardList characters={data.results} />;
};
