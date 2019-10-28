import { Injectable } from '@nestjs/common';
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

  create(todo: CreateTodoDto) {
    this.todos = [...this.todos, todo as Todo];
  }
}
