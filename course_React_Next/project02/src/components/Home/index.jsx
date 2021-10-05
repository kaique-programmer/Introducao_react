/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect, useCallback } from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(async () => {
    console.log('EFFECT', new Date().toLocaleString());

    await new Promise((r) => setTimeout(r, 3000));

    setState({
      result: null,
      error: null,
      status: 'pending',
    });

    await new Promise((r) => setTimeout(r, 3000));

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'settled',
        });
      })
      .catch((e) => {
        setState({
          result: null,
          error: e,
          status: 'error',
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  await new Promise((r) => setTimeout(r, 3000));
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  return json;
};

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  useEffect(() => {
    setTimeout(() => {
      reFetchData();
    }, 3000);
  }, [reFetchData]);

  function handleClick() {
    reFetchData();
  }

  if (status === 'idle') {
    return <pre>idle: Nothing execution</pre>;
  }

  if (status === 'pending') {
    return <pre>pending: loading</pre>;
  }

  if (status === 'error') {
    return (
      <pre>
        error:
        {' '}
        {error.message}
      </pre>
    );
  }

  if (status === 'settled') {
    return (
      <pre onClick={handleClick}>
        settled:
        {' '}
        {JSON.stringify(result, null, 2)}
      </pre>
    );
  }

  return 'error on the request';
};

export default Home;
