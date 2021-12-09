import "./App.css";
import * as React from "react";

function App() {
  const [task, setTask] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);
  const listTasks = taskList.map((item) => (
    <li name={item.id} onClick={deleteItem}>
      {" "}
      {item.word}{" "}
    </li>
  ));

  function deleteItem(deleteEvent) {
    var newId = deleteEvent.target.getAttribute("name");
    setTaskList(taskList.filter((task) => task.id != newId));
  }

  function OnAdd() {
    var newTask = {
      id: taskList.length,
      word: task,
    };

    setTaskList([...taskList, newTask]);
    setTask("");
  }
  function OnType(deleteEvent) {
    setTask(deleteEvent.target.value);
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className="ImageDiv">
          <img
            src="https://c.tenor.com/JpuK1ztS6VIAAAAd/patrick-dancing-patrick-star.gif"
            className="App-logo"
            alt="Patrick Dancing"
            width="300"
            height="300"
          />
        </div>
        <div className="App-TodoText">
          <h1>To-Do List</h1>
        </div>
        <div>
          <input
            type="text"
            onChange={OnType}
            value={task}
            style={{ width: "800px", height: "40px", fontSize: "30px" }}
          />
        </div>
        <div>
          <button
            onClick={OnAdd}
            type="submit"
            className="App-Button"
            style={{ scale: "200%" }}
          >
            Add Event
          </button>
        </div>
        <div className="App-TodoList">
          <ul className="theList">{listTasks}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
