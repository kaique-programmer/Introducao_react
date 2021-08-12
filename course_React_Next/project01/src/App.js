import { Component } from 'react'; 

class App extends Component {

  state = {
   counter: 0,
   posts: [
     {
       id: 1,
       title: 'title one',
       body: 'the body 1'
     },
     {
       id: 2,
       title: 'title two',
       body: 'the body 2'
     },
     {
       id: 3,
       title: 'title three',
       body: 'the body 3'
     }
    ]
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'the title changed';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 5000);
  }

  render() {
    const { posts } = this.state;

  return (
    <div className="App">
      {posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
  }
}

export default App;
