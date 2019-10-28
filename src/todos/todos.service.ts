import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  todos = [
    {
      id: 1,
      title: 'todos app',
      description: 'create nestjs todos app',
    },
    {
      id: 2,
      title: 'other todos app',
      description: 'other create nestjs todos app',
    },
  ];

  findAll(): any[] {
    return this.todos;
  }
}
