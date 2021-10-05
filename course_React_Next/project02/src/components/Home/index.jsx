/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import useFetch from './use-feth';

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
