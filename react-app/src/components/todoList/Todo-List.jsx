import React from "react";
import "./Todo.scss";
import TodoAddTask from "./Todo-add-task";
import TodoFilters from "./Todo-filters";
import TodoItem from "./Todo-item";
import TodoHeader from "./Todo-header";

const TodoList = () => {
  return (
    // .To Do
    <div className="todo">
      {/* Header */}
      <TodoHeader />

      {/* Add item to Todo List */}
      <TodoAddTask />

      <div
        style={{
          width: "60%",
          backgroundColor: "white",
          padding: ".5em 0 .6rem 0",
          borderRadius: "2px",
        }}
      >
        {/* Filters */}
        <TodoFilters />

        {/* Task list */}
        <div className="task-list">
          <hr />
          <TodoItem title="Work" completed={true} />
          <hr />
          <TodoItem title="Gym" completed={false} />
          <hr />
          <TodoItem title="Shop" completed={false} />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
