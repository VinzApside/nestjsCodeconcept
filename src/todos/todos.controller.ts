import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todos') // equals localhost:3000/todos
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    // console.log('id', id);
    return this.todosService.findOne(id);
  }

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Post()
  createTodo(@Body() newTodo) {
    console.log('newTodo', newTodo);
    this.todosService.create(newTodo);
  }
}
