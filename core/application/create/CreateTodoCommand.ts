import { Command } from '../../domain/Command';

type Params = {
  completed: boolean;
  todoId: number;
  todoTitle: string;
  userId: number;
};

export class CreateTodoCommand extends Command {
  public completed: boolean;
  public todoId: number;
  public todoTitle: string;
  public userId: number;

  constructor({ completed, todoId, todoTitle, userId }: Params) {
    super();
    this.completed = completed;
    this.todoId = todoId;
    this.todoTitle = todoTitle;
    this.userId = userId;
  }
}
