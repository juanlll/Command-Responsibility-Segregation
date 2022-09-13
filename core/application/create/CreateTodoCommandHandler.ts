import { Command } from '../../domain/Command';
import { CommandHandler } from '../../domain/CommandHandler';
import { CreateTodoCommand } from './CreateTodoCommand';
import { CreateTodoUseCase } from './TodoCourse';

export class CreateTodoCommandHandler
  implements CommandHandler<CreateTodoCommand>
{
  constructor(private createTodoUseCase: CreateTodoUseCase) {}

  subscribedTo(): Command {
    return CreateTodoCommand;
  }

  async handle(command: CreateTodoCommand): Promise<void> {
    await this.createTodoUseCase.run({
      completed: command.completed,
      todoId: command.todoId,
      todoTitle: command.todoTitle,
      userId: command.userId,
    });
  }
}
