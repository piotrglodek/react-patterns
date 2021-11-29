import { useState, useEffect } from 'react';

const useFetchRickAndMorty = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMoreData, setIsFetchingMoreData] = useState(false);
  const [nextData, setNextData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let urlType = typeof url;
    if (!url || urlType !== 'string')
      throw new Error(
        `useFetch needs url parameter or url parameter is not string. Received url type: ${urlType}`
      );

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
          throw new Error('😱 Something went wrong with fetching data!');
        }
        setData(data);
        setNextData(data.info.next);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const fetchMore = async () => {
    try {
      setIsFetchingMoreData(true);
      const response = await fetch(nextData);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('😱 Something went wrong with fetching data!');
      }
      setNextData(data.info.next);
      setData(prev => {
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

  return [data, isLoading, error, isFetchingMoreData, fetchMore, nextData];
};

export default useFetchRickAndMorty;
