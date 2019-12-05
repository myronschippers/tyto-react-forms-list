import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: null,
      inputAge: null,
      inputHeight: null,
      people: [
        {
          name: 'Scott',
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
      ]
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
        return <p key={index}>{item.name} is {item.age} years old.</p>
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
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(event) => this.multiInputHandler(event, 'inputAge')}
        />
        <input
          type="number"
          placeholder="Height"
          onChange={(event) => this.multiInputHandler(event, 'inputHeight')}
        />

        <button onClick={this.handleSubmitClick}>Submit</button>

        <div>
          {peopleElements}
        </div>
      </div>
    );
  }
}

export default App;
