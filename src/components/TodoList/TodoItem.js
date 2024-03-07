function Li(props) {
  const renderLi = () => {
    const { todoList } = props;
    const clickHandler = (taskIDtoRemove) => {
      props.callbackBtn(taskIDtoRemove);
    };

    return todoList.map((task) => (
      <li key={task.id}>
        {task.text}
        <button
          onClick={() => {
            clickHandler(task.id);
          }}
        >
          X
        </button>
      </li>
    ));
  };

  return renderLi();
}

export default Li;
