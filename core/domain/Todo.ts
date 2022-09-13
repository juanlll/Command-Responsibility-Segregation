export class Todo {
  constructor(
    public completed: boolean,
    public id: number,
    public title: string,
    public userId: number
  ) {}
}
