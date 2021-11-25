import CardList from '../components/CardList';
import { Spinner } from '../../../components/Spinner';
// hook
import useFetch from '../../../hooks/useFetch';
// api
const API_URL = `https://rickandmortyapi.com/api/character`;

export const RickAndMortyCharacters = () => {
  const [data, isLoading, error] = useFetch(API_URL);

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return <CardList data={data} />;
};
