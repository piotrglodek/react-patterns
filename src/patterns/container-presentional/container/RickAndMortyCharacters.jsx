import { useState, useEffect } from 'react';

import CardList from '../components/CardList';
import { Spinner } from '../../../components/Spinner';
// hook
import useFetch from '../../../hooks/useFetch';
// api
const API_URL = `https://rickandmortyapi.com/api/character`;

export const RickAndMortyCharacters = () => {
  const [data, isLoading, error] = useFetch(API_URL);
  const [_data, _setData] = useState(null);
  const [isFetchingMoreData, setIsFetchingMoreData] = useState(false);
  const [nextData, setNextData] = useState(null);

  useEffect(() => {
    if (data) {
      _setData(data);
      setNextData(data.info.next);
    }
  }, [data]);

  const fetchMore = async () => {
    try {
      setIsFetchingMoreData(true);
      const response = await fetch(nextData);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('😱 Something went wrong with fetching data!');
      }
      setNextData(data.info.next);
      _setData(prev => {
        return {
          ...prev,
          info: {
            ...prev.info,
            next: data.info.next,
          },
          results: [...prev.results, ...data.results],
        };
      });
      setIsFetchingMoreData(false);
    } catch (error) {
      setIsFetchingMoreData(false);
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <CardList
      data={_data}
      hasMore={nextData}
      isFetchingMore={isFetchingMoreData}
      handleFetchMore={fetchMore}
    />
  );
};
