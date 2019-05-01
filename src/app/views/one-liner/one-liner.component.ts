import { Component, OnInit } from '@angular/core';
import {OnelinerService} from '../../models/services/oneliner.service';
import {Heroku} from '../../models/heroku';

@Component({
  selector: 'app-one-liner',
  templateUrl: './one-liner.component.html',
  styleUrls: ['./one-liner.component.scss']
})
export class OneLinerComponent implements OnInit {

  oneLiner: Heroku;
  constructor(private jokeService: OnelinerService) { }

  ngOnInit() {
    this.getOneLiner();
  }
  getOneLiner(): void {
    this.jokeService.getOneLiner().subscribe(
      (res) => {
        this.oneLiner = res;
      }
    );
  }

}
