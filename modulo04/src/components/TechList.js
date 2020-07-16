import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = { // Estado que não pode ser mutável
    newTech: '',
    techs: []
  };

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) { // localstorage não reconhece vetores, por isso uso do JSON
      localStorage.setItem('techs', JSON.stringify(this.state.techs)); 
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnMount(){

  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    })
  }

  handleDelete = (tech) => {
    // Lista todas as opções, menos a que é passada como parâmetro
    this.setState({ techs: this.state.techs.filter(t => t !== tech) }); 
  }

  render() {    
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem 
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />            
          ))}      
        </ul>
        <input type="text" onChange={this.handleInputChange} value={this.state.newTech}/>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;