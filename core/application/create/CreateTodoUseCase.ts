import { Todo } from '../../domain/Todo';
import { TodoRepository } from '../../domain/TodoRepository';

type Params = {
  completed: boolean;
  todoId: number;
  todoTitle: string;
  userId: number;
};

export class CreateTodoUseCase {
  private repository: TodoRepository;

  constructor(repository: TodoRepository) {
    this.repository = repository;
  }

  async run({ completed, todoId, todoTitle, userId }: Params): Promise<void> {
    const todo = new Todo(completed, todoId, todoTitle, userId);
    await this.repository.save(todo);
  }
}
