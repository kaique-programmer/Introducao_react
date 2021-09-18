/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import Props from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

const Post = ({ post }) => {
  console.log('filho, renderizou');
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>;
};

Props.propTypes = {
  post: Props.shape({
    id: Props.number,
    title: Props.string,
    body: Props.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('pai, renderizou');

  // componentDidMount
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((response) => setPosts(response));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <p>
        <input type="search" value={value} onChange={(event) => setValue(event.target.value)} />
      </p>
      {useMemo(() => (
        posts.length > 0
          && posts.map((post) => <Post key={post.id} post={post} />)
      ), [posts])}

      {posts.length <= 0 && (<p>Wait! not exist posts</p>)}
    </div>
  );
}

export default App;
