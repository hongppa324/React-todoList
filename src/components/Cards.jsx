import Buttons from "./Buttons";
import "./styles/Cards.css";

function Cards({
  id,
  title,
  content,
  isDone,
  deleteButton,
  completeButton,
  cancelButton,
}) {
  return (
    <div key={id} className={isDone ? "done-todo-card" : "working-todo-card"}>
      <span>
        <h2>{title}</h2>
      </span>
      <span>
        <h4>{content}</h4>
      </span>
      <Buttons
        id={id}
        isDone={isDone}
        deleteButton={deleteButton}
        completeButton={completeButton}
        cancelButton={cancelButton}
      />
    </div>
  );
}

export default Cards;
