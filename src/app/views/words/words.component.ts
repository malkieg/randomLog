import { Component, OnInit } from '@angular/core';
import {WordsService} from '../../models/services/words.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
words: any;
  constructor(private wordsService: WordsService) { }

  ngOnInit() {
    this.getWords();
  }

  getWords(): void {
    this.wordsService.getWords().subscribe(
      (res) => {
        this.words = res;
      }
    );
  }

}
