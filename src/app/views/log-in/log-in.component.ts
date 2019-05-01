import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  username: string;
  password: string;
  trial: string;

  constructor() { }

  ngOnInit() {
  }
  success(): any {
    if (this.username === 'admin' && this.password === 'password') {
      this.trial = 'worked';
      return this.trial;
    } else {
      this.trial = 'wrong username or password';
      return this.trial;
    }
  }

}
