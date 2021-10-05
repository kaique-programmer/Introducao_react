/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useRef, useState } from 'react';

const isObjectEqual = (objectA, objectB) => JSON.stringify(objectA) === JSON.stringify(objectB);

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldload] = useState(false);

  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    let changed = false;

    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }
    if (!isObjectEqual(options, options.current)) {
      optionsRef.current = options;
      changed = true;
    }

    if (changed) {
      setShouldload((s) => s);
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false;
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));

      try {
        const response = await fetch(urlRef.current, { signal, ...optionsRef.current });
        const jsonResult = await response.json();
        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (e) {
        if (!wait) {
          setLoading(false);
        }
        console.warn(e);
      }
    };

    fetchData();

    return () => {
      wait = true;
      controller.abort();
    };
  }, [shouldLoad]);

  return [result, loading];
};

const Home = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    headers: {
      abc: `2000${postId}`,
    },
  });

  if (loading) {
    return <p>loading ...</p>;
  }

  const handleClick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (result.map(((post) => (
          <div key={`post-${post.id}`} onClick={() => handleClick(post.id)}>
            <p>{post.title}</p>
          </div>
        )))) : (
          <div onClick={() => handleClick('')}>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <h1>hello</h1>
  );
};

export default Home;
