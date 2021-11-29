import { useState, useEffect } from 'react';

import CardList from '../components/CardList';
import { Spinner } from '../../../components/Spinner';
// hook
import useFetchRickAndMorty from '../../../hooks/useFetchRickAndMorty';
// api
const API_URL = `https://rickandmortyapi.com/api/character`;

export const RickAndMortyCharacters = () => {
  const [data, isLoading, error, isFetchingMoreData, fetchMore, nextData] =
    useFetchRickAndMorty(API_URL);

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <CardList
      data={data}
      hasMore={nextData}
      isFetchingMore={isFetchingMoreData}
      handleFetchMore={fetchMore}
    />
  );
};
