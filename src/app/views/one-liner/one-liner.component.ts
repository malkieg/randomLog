import { Component, OnInit } from '@angular/core';
import {HerokuService} from '../../models/services/heroku.service';
import {Heroku} from '../../models/heroku';

@Component({
  selector: 'app-one-liner',
  templateUrl: './one-liner.component.html',
  styleUrls: ['./one-liner.component.scss']
})
export class OneLinerComponent implements OnInit {

  oneLiner: Heroku;
  trial = window.localStorage.getItem('token')
  constructor(private herokuService: HerokuService) { }

  ngOnInit() {
    this.getOneLiner();
    console.log('token');
  }
  getOneLiner(): void {
    this.herokuService.getOneLiner().subscribe(
      (res) => {
        this.oneLiner = new Heroku(res);
      }
    );
  }

}
