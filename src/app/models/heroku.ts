
export class Heroku {
  body: string;

  constructor(args?) {
    if (args) {
      this.body = args.body;
    }
  }
}
