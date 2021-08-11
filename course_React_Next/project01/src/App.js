import { Component } from 'react'; 

class App extends Component {

  state = {
    name: 'kaique',
    counter: 0
  }

  handlePClik = () => {
    this.setState({ name: 'oliver' });
  }

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const {name, counter} = this.state;
  return (
    <div className="App">
      <header className="App-header">        
        <p onClick={this.handlePClik}>
          {name}{counter}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={this.handleAClick}
        >
          link contador
        </a>
      </header>
    </div>
  );
  }
}

export default App;
