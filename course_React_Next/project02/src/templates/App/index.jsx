import Posts from '../../components/Posts';
import PostsProvider from '../../contexts/PostsProvider';

// App.jsx
function App() {
  return (
    <>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </>
  );
}

export default App;
