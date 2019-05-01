
export class Heroku {
  joke: string;

  constructor(args?) {
    if (args) {
      this.joke = args.joke;
    }
  }
}
