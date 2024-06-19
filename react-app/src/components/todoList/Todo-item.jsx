import React from "react";

const TodoItem = ({ title, completed }) => {
  return (
    <div className="task-item">
      <input type="checkbox" defaultChecked={completed} />
      <span
        style={{
          marginLeft: "10px",
          textDecoration: completed === true ? "line-through" : "none",
        }}
      >
        {title}
      </span>

      <button>
        <img
          src="https://static.vecteezy.com/system/resources/previews/026/529/438/non_2x/simple-red-cross-mark-icon-vector.jpg"
          alt="red cross icon"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
};

function isCompleted(completed) {
  if (completed === true) {
    return "line-through";
  } else {
    return "none";
  }
}

export default TodoItem;
