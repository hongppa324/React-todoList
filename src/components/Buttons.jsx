import React from "react";
import "./styles/Buttons.css";

function Buttons({ deleteButton, cancelButton, completeButton, id, isDone }) {
  return (
    <div className="button-wrapper">
      <button className="delete-btn" onClick={() => deleteButton(id)}>
        삭제하기
      </button>
      {isDone ? (
        <button className="cancel-btn" onClick={() => cancelButton(id)}>
          취소
        </button>
      ) : (
        <button className="complete-btn" onClick={() => completeButton(id)}>
          완료
        </button>
      )}
    </div>
  );
}

export default Buttons;
