import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos') // equals localhost:3000/todos
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  findAll(): any[] {
    return this.todosService.findAll();
  }
}
