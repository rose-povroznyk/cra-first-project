import React from 'react';
import Li from './TodoItem.js';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        { id: 1, text: 'go to party' },
        { id: 2, text: 'meet friends' },
        { id: 3, text: 'have a walk' },
      ],
    };
  }

  removeTask(taskIDtoRemove) {
    const { todoList } = this.state;

    const filteredArray = todoList.filter((task) => task.id !== taskIDtoRemove);

    this.setState({
      todoList: filteredArray,
    });
  }

  render() {
    const { todoList } = this.state;

    return (
      <>
        <h1>TODO LIST</h1>

        <ul>
          <Li
            todoList={todoList}
            callbackBtn={(taskIDtoRemove) => {
              this.removeTask(taskIDtoRemove);
            }}
          />
        </ul>
      </>
    );
  }
}

export default TodoList;
