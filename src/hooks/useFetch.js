import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, isLoading, error];
};

export default useFetch;
