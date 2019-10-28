import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todos') // equals localhost:3000/todos
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }
}
