import React from 'react';
import PT from 'prop-types';
import styles from './index.module.css';
import { Card } from '../card';
import { todo as todoShape } from '../../models/todo';

export const TodoList = ({ todos, onTodoComplete }) => (
  <div className={styles.container}>
    <div className={styles.title}>All To-dos</div>
    <div className={styles.todos}>
      {
      todos
        .filter((todo) => todo.done === false)
        .map((todo) => (
          <Card
            key={todo.id}
            title={todo.title}
            onDone={() => onTodoComplete(todo.id)}
          />
        ))
      }
    </div>
  </div>
);

TodoList.propTypes = {
  todos: PT.arrayOf(todoShape),
  onTodoComplete: PT.func.isRequired,
};

TodoList.defaultProps = {
  todos: [],
};
