import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let urlType = typeof url;
    if (!url || urlType !== 'string')
      throw new Error(
        `useFetch needs url parameter or url parameter is not string. Received url type: ${urlType}`
      );

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const fetchData = await (await fetch(url)).json();
        setData(fetchData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, isLoading, error];
};

export default useFetch;
