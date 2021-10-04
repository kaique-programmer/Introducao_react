import { useEffect, useContext, useRef } from 'react';
import PostsContext from '../../contexts/PostsProvider/context';
import loadPosts from '../../contexts/PostsProvider/actions';

const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <h1>POSTS</h1>
      {postsState.loading && (
        <p><strong>Loading posts...</strong></p>
      )}

      {postsState.posts.map((posts) => (
        <p key={posts.id}>{posts.title}</p>
      ))}
    </div>
  );
};

export default Posts;
