import React, { Component } from 'react';
import './styles/App.css';
import uniqid from 'uniqid';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
        number: 1,
      },
      tasks: [],
    };
  }

  onChangeTask = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        number: this.state.task.number,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
        number: this.state.task.number + 1,
      },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div className='App'>
        <h1>Task App</h1>
        <form action='#' className='task-form' onSubmit={this.onSubmitTask}>
          <div className='input-div'>
            <label htmlFor='task-input'>Enter a task:</label>
            <input
              type='text'
              name='task-input'
              id='task-input'
              onChange={this.onChangeTask}
              value={task.text}
            />
            <button type='submit' className='submit btn'>
              Add Task
            </button>
          </div>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
