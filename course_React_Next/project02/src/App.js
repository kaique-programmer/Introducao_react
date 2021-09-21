/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import Props from 'prop-types';
import {
  useEffect, useMemo, useRef, useState,
} from 'react';

const Post = ({ post, handleClick }) => {
  console.log('filho, renderizou');
  return (
    <div key={post.id} className="post">
      <h1 style={{ fontSize: '14px' }} onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: Props.shape({
    id: Props.number,
    title: Props.string,
    body: Props.string,
  }),
  handleClick: Props.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const counter = useRef(0);

  console.log('pai, renderizou');

  // componentDidMount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => setPosts(response));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    counter.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h6>
        Renderizou:
        {' '}
        {counter.current}
        x
      </h6>
      <p>
        <input
          type="search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          ref={input}
        />
      </p>
      {useMemo(() => (
        posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} handleClick={handleClick} />)
      ))}

      {posts.length <= 0 && (<p>Wait! not exist posts</p>)}
    </div>
  );
}

export default App;
