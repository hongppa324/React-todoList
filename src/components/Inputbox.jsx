import "./styles/Inputbox.css";

function Inputbox({
  addTitleHandler,
  addContentHandler,
  addListButtonHandler,
  title,
  content,
}) {
  return (
    <div className="input-box">
      <label>
        <strong>제목 : </strong>
        <input
          className="input"
          onChange={addTitleHandler}
          value={title}
          placeholder="제목을 입력해주세요."
        />
      </label>
      <label>
        <strong>내용 : </strong>
        <input
          className="input"
          onChange={addContentHandler}
          value={content}
          placeholder="내용을 입력해주세요."
        />
      </label>
      <button className="add-btn" onClick={addListButtonHandler}>
        추가하기
      </button>
    </div>
  );
}

export default Inputbox;
