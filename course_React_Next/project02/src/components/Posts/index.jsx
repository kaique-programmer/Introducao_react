import { useEffect, useContext, useRef } from 'react';
import PostsContext from '../../contexts/PostsProvider/context';
import loadPosts from '../../contexts/PostsProvider/actions';
import CounterContext from '../../contexts/CounterProvider/context';
import { decrementCounter, incrementCounter } from '../../contexts/CounterProvider/actions';

const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

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
      <button type="button" onClick={() => incrementCounter(counterDispatch)}>
        Counter
        {' '}
        {counterState.counter}
        +
      </button>
      <button type="button" onClick={() => decrementCounter(counterDispatch)}>
        Counter
        {counterState.counter}
        -
      </button>
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
