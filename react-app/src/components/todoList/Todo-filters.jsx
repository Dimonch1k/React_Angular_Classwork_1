import React from "react";

const TodoFilters = () => {
  return (
    <div className="filter">
      <img
        src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/11-512.png"
        alt="completed task icon"
        style={{width: "25px", height: "20px"}}
      />

      <div className="filter-buttons">
        <button>TODO</button>
        <button>DONE</button>
        <button>ALL</button>
      </div>
    </div>
  );
};

export default TodoFilters;
