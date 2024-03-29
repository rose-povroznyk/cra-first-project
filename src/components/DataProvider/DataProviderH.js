import React, { useEffect, useState } from 'react';

const useData = (loadData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    loadData()
      .then((data) => setData(data))
      .catch((error) => setIsError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, isError };
};

export default useData;
