import { Component } from 'react'; 

class App extends Component {

  state = {
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
