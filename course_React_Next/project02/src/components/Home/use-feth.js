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

export default useFetch;
