export interface TodoRepository {
  save(Todo): Promise<any>;
}
