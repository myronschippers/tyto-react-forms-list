import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: null,
        age: null,
        height: null,
      },
      people: [],
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
      form: {
        ...this.state.form,
        [inputKey]: event.target.value,
      }
    });
  }

  handleSubmitClick = (event) => {
    console.log(this.state);
    console.log(this.state['age']);
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
        <p>{this.state.form.name}</p>
        <p>{this.state.form.age}</p>
        <p>{this.state.form.height}</p>
      </div>
    );

    if (this.state.accordionOpen === false) {
      results = null;
    }

    const peopleElements = this.state.people.map((item, index) => {
      return <div>{item.name} is {item.age} years old.</div>
    });

    return (
      
      <div className="App">
        <div>
          <button onClick={this.toggleAccordion}>Hide/Show Results</button>
          {results}
        </div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => this.multiInputHandler(event, 'name')}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(event) => this.multiInputHandler(event, 'age')}
        />
        <input
          type="number"
          placeholder="Height"
          onChange={(event) => this.multiInputHandler(event, 'height')}
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
