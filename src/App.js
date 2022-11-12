import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: '' },
      tasks: [],
    };
  }

  render() {
    return (
      <div className='App'>
        <h1>Task App</h1>
      </div>
    );
  }
}

export default App;
