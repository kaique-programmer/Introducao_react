import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';

// App.jsx
function App() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/abc');
    }, 5000);
  }, [history]);

  return (
    <>
      <CounterProvider>
        <PostsProvider>
          <div>
            <Posts />
          </div>
        </PostsProvider>
      </CounterProvider>
    </>
  );
}

export default App;
