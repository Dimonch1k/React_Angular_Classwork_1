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

      <div className="todo-wrapper">
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
