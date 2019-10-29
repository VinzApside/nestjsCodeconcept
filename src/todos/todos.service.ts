import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'todos app',
      description: 'create nestjs todos app',
      done: false,
    },
    {
      id: 2,
      title: 'other todos app',
      description: 'other create nestjs todos app',
      done: true,
    },
    {
      id: 3,
      title: 'other other todos app',
      description: 'other other create nestjs todos app',
      done: true,
    },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: string): Todo[] {
    return this.todos.filter(todo => todo.id === Number(id));
  }

  createTodo(todo: CreateTodoDto) {
    this.todos = [...this.todos, todo as Todo];
  }

  updateTodo(id: string, todo: Todo) {
    const todoToUpdate = this.todos.find(t => t.id === +id);

    if (!todoToUpdate) {
      return new NotFoundException(`"${id} not found"`);
    }

    if (todo.hasOwnProperty('done')) {
      todoToUpdate.done = todo.done;
    }
    if (todo.title) {
      todoToUpdate.title = todo.title;
    }
    if (todo.description) {
      todoToUpdate.description = todo.description;
    }
    const updatedTodos = this.todos.map(t => (t.id !== +id ? t : todoToUpdate));
    this.todos = [...updatedTodos];
    return { updateTodo: 1, todo: todoToUpdate };
  }

  deleteTodo(id: string) {
    const nbOfTodosBeforeDelete = this.todos.length;
    this.todos = [...this.todos.filter(todo => todo.id !== +id)];
    if (this.todos.length < nbOfTodosBeforeDelete) {
      return { deletedTodos: 1, nbTodos: this.todos.length };
    } else {
      return { deletedTodos: 0, nbTodos: this.todos.length };
    }
  }
}
