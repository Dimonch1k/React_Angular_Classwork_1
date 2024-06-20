import React from "react";

const TodoItem = ({ title, completed }) => {
  return (
    <div className="task-list__item">
      <input type="checkbox" defaultChecked={completed} />
      <span
        className="task-title"
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {title}
      </span>

      <button className="delete-btn">
        <img
          src={require("../../images/red-cross-circle_icon.png")}
          alt="red cross icon"
          style={{ width: "15px", height: "15px", borderRadius: "50%"}}
        />
      </button>
    </div>
  );
};

export default TodoItem;

// function isCompleted(completed) {
//   if (completed === true) {
//     return "line-through";
//   } else {
//     return "none";
//   }
// }
