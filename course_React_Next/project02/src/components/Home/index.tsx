import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('EFFECT', new Date().toLocaleDateString());

    setLoading(true);

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));

      try {
        const response = await fetch(url, options);
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        throw e;
      }
    };

    fetchData();

    setLoading(false);
  }, [url, options]);

  return [result, loading];
};

const Home = () => {
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts', null);

  if (loading) {
    return <p>loading ...</p>;
  }

  if (!loading && result) {
    console.log(result);
  }

  return (
    <h1>hello</h1>
  );
};

export default Home;
