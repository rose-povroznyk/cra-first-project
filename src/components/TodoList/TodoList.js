import React from 'react';
import cx from 'classnames';
import Li from './TodoItem.js';
import styles from './Todolist.module.scss';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        { id: 1, text: 'go to party' },
        { id: 2, text: 'meet friends' },
        { id: 3, text: 'have a walk' },
      ],

      task: '',
      idCounter: 3,
      isInputValid: true,
    };
  }

  removeTask(taskIDtoRemove) {
    const { todoList } = this.state;

    const filteredArray = todoList.filter((task) => task.id !== taskIDtoRemove);

    this.setState({
      todoList: filteredArray,
    });
  }

  changeInputHandler = ({ target: { value } }) => {
    if (value.includes('*') === true) {
      this.setState({ isInputValid: false });
    } else {
      this.setState({
        task: value,
        isInputValid: true,
      });
    }
  };

  addTaskByClick = () => {
    const { todoList, task, idCounter } = this.state;
    todoList.push({ id: idCounter + 1, text: task });
    this.setState({
      todoList: todoList,
      task: '',
      idCounter: idCounter + 1,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ task: '' });
  };

  render() {
    const { todoList, task, isInputValid } = this.state;
    const className = cx({
      [styles.input]: true,
      [styles.inValid]: !isInputValid,
      [styles.valid]: isInputValid,
    });

    return (
      <>
        <h1>TODO LIST</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            value={task}
            onChange={this.changeInputHandler}
            className={className}
          />
          <button onClick={this.addTaskByClick}>Add task</button>
        </form>

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

// function cx(objectClassNames) {
//   // const cort = Object.entries(objectClassNames);
//   // const filteredArray = cort.filter(([className, condition]) => {
//   //   if (condition === true) {
//   //     return true;
//   //   } else if (condition === false) {
//   //     return false;
//   //   }
//   // });
//   // const mapArray = filteredArray.map(([className, condition]) => className);
//   // return mapArray.join('');

//   // return Object.entries(objectClassNames)
//   //   .filter(([condition]) => condition)
//   //   .map(([className, condition]) => className)
//   //   .join(' ');

//   return Object.entries(objectClassNames)
//     .filter(([className, condition]) => condition)
//     .map(([className, condition]) => className)
//     .join(' ');
// }

/* objectClassNames = {
  className1: true,
  className2: true,
  className3: false

 } */
