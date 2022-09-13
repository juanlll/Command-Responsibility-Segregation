import { Todo } from '../domain/Todo';
import { TodoRepository } from '../domain/TodoRepository';

export class AxiosTodoRepository implements TodoRepository {
  public save(todo: Todo): Promise<any> {
    console.log('Method not implemented.', todo);
    return Promise.resolve(true);
  }
}
