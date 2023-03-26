import { useState, useEffect } from 'react';

const endpoint = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';

const headers = {
  "content-type": "application/json",
  // "Authorization": "<token>"
};

interface Query {
  query: string;
}

export const getItems: Query = {
  "query": `{
    pairs {
      id
    }
  }`,
};


export const useGraph = (graphqlQuery: Query) => {
  const [data, setData] = useState<Response | null>(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          "method": "POST",
          "headers": headers,
          "body": JSON.stringify(graphqlQuery)
        };
        const response = await fetch(endpoint, options);
        const data = await response.json();
        setData(data.data);
        console.log("fetch data:", data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
};

