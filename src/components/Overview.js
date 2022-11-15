import React from 'react';

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <div className='li-number'>{task.number}</div>
            <div className='li-text'>{task.text}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
