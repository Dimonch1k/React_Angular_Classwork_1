import React from "react";

const TodoAddTask = () => {
  return (
    <div className="add-task">
      <img
        src="https://cdn2.iconfinder.com/data/icons/toolbar-signs-2/512/list_text_document_book_schedule-512.png"
        alt="Todo list icon"
        style={{ width: "40px", height: "30px" }}
      />

      <input
        type="text"
        className="add-text"
        placeholder="Enter your next task"
      />

      <button className="add-btn">
        <img
          src="https://banner2.cleanpng.com/20180409/gye/kisspng-computer-icons-symbol-icon-design-google-plus-5acb0027158c40.8641644415232532870883.jpg"
          alt="white plus icon"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
};

export default TodoAddTask;
