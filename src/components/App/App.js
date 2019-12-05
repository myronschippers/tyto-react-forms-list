import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: '',
      inputAge: '',
      inputHeight: '',
      people: [
        {
          name: 'Scott',
          age: 36,
          height: 4,
        },
        {
          name: 'Scott (flash)',
          age: 36,
          height: 4,
        }
      ],
      accordionOpen: false,
    }

  }

  // handleNameChange = (event) => {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // }

  // handleAgeChange = (event) => {
  //   this.setState({
  //     age: event.target.value,
  //   });
  // }

  multiInputHandler = (event, inputKey) => {
    this.setState({
      [inputKey]: event.target.value
    });
  }

  handleSubmitClick = (event) => {
    this.setState({
      people: [
        ...this.state.people,
        {
          name: this.state.inputName,
          age: this.state.inputAge,
          height: this.state.inputHeight
        }
      ],
      inputAge: '',
      inputHeight: '',
      inputName: ''
    });
  }

  toggleAccordion = (event) => {
    this.setState({
      accordionOpen: !this.state.accordionOpen,
    });
  }

  render() {
    let results = (
      <div>
        Recording:
        <p>{this.state.inputName}</p>
        <p>{this.state.inputAge}</p>
        <p>{this.state.inputHeight}</p>
      </div>
    );

    if (this.state.accordionOpen === false) {
      results = null;
    }

    const peopleElements = this.state.people.map(
      (item, index) => {
        return <span key={index}>
          name: {item.name}<br/>
          age: {item.age} <br/>
          height: {item.height}<br/>
        </span>
      }
    );

    return (
      
      <div className="App">
        <div>
          <button onClick={this.toggleAccordion}>Hide/Show Results</button>
          {results}
        </div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => this.multiInputHandler(event, 'inputName')}
          value={this.state.inputName}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(event) => this.multiInputHandler(event, 'inputAge')}
          value={this.state.inputAge}
        />
        <input
          type="number"
          placeholder="Height"
          onChange={(event) => this.multiInputHandler(event, 'inputHeight')}
          value={this.state.inputHeight}
        />

        <button onClick={this.handleSubmitClick}>Submit</button>

        <div className="woot">
          <h2>Your PEEPS!!!</h2>
          {peopleElements}
        </div>
      </div>
    );
  }
}

export default App;
