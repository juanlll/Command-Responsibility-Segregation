import { CreateTodoCommand } from './core/application/create/CreateTodoCommand';
import { CreateTodoCommandHandler } from './core/application/create/CreateTodoCommandHandler';
import { CreateTodoUseCase } from './core/application/create/TodoCourse';
import { AxiosTodoRepository } from './core/infrastructure/AxiosTodoRepository';
import { CommandHandlersInformation } from './core/infrastructure/CommandHandlersInformation';
import { InMemoryCommandBus } from './core/infrastructure/InMemoryCommandBus';

const createTodoCommand = new CreateTodoCommand({
  completed: true,
  todoId: 23,
  todoTitle: 'HolaamUNd',
  userId: 12,
});

const createTodoHandler = new CreateTodoCommandHandler(
  new CreateTodoUseCase(new AxiosTodoRepository())
);
const bus = new InMemoryCommandBus(
  new CommandHandlersInformation([createTodoHandler])
);
console.log(bus.dispatch(createTodoCommand));
