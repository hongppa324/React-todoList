import { useState } from "react";
import Inputbox from "./Inputbox";
import Cards from "./Cards";

function TodoListContainer() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todoLists, setTodoLists] = useState([]);

  const addTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const addContentHandler = (event) => {
    setContent(event.target.value);
  };

  const addListButtonHandler = () => {
    const newTodoList = {
      id: todoLists.length + 1,
      title,
      content,
      isDone: false,
    };
    setTodoLists([...todoLists, newTodoList]);
    setTitle("");
    setContent("");
  };

  const deleteButtonHandler = (id) => {
    const temp = todoLists.filter((todo) => todo.id !== id);
    setTodoLists([...temp]);
  };

  const isDoneButtonHandler = (id) => {
    const temp = todoLists.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodoLists([...temp]);
  };

  return (
    <div>
      <Inputbox
        title={title}
        content={content}
        addTitleHandler={addTitleHandler}
        addContentHandler={addContentHandler}
        addListButtonHandler={addListButtonHandler}
      />
      <div className="working-list-wrapper">
        <span className="working-list-title">
          <h2>Working...🔥</h2>
        </span>
        <div className="working-todo-wrapper">
          {todoLists.map((todo) =>
            !todo.isDone ? (
              <Cards
                key={todo.id}
                id={todo.id}
                title={todo.title}
                content={todo.content}
                isDone={todo.isDone}
                deleteButton={deleteButtonHandler}
                completeButton={isDoneButtonHandler}
              />
            ) : null
          )}
        </div>
      </div>

      <div className="done-list-wrapper">
        <span className="done-list-title">
          <h2>Done..!🎉</h2>
        </span>
        <div className="done-todo-wrapper">
          {todoLists.map((todo) =>
            todo.isDone ? (
              <Cards
                key={todo.id}
                id={todo.id}
                title={todo.title}
                content={todo.content}
                isDone={todo.isDone}
                deleteButton={deleteButtonHandler}
                cancelButton={isDoneButtonHandler}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoListContainer;
