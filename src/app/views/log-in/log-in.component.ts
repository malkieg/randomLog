import { Component, OnInit } from '@angular/core';
import { HerokuService} from '../../models/services/heroku.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  username: string;
  password: string;
  error: string;

  constructor(private herokuService: HerokuService) { }

  ngOnInit() {
  }
  logIn(): void {
    if (this.username === 'admin' && this.password === 'password') {
       this.herokuService.login(this.username, this.password).subscribe((res) => {
         if (res.token) {
           window.localStorage.setItem('token', res.token);
           console.log(res.token);
         }
       });
       this.error = '';
    } else {
      this.error = 'Wrong username or password';
    }
  }

}
