import React from "react";

const TodoItem = ({ title, completed }) => {
  return (
    <div className="task-list__item">
      <img
        src={
          completed
            ? require("../../images/checked.jpg")
            : require("../../images/unchecked.jpg")
        }
        alt="checked unchecked"
        onClick={completeTask}
      />

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
          style={{ width: "15px", height: "15px", borderRadius: "50%" }}
        />
      </button>
    </div>
  );
};

export default TodoItem;


function completeTask() {
  
}
