import React, { Component } from 'react';
import './styles/App.css';
import Overview from './components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: '' },
      tasks: [],
    };
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div className='App'>
        <h1>Task App</h1>
        <div className='input'>
          <label htmlFor='task-input'>Enter a task:</label>
          <input type='text' name='task-input' id='task-input' />
          <button>Add Task</button>
        </div>
      </div>
    );
  }
}

export default App;
