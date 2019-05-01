import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from './views/log-in/log-in.component';
import {WordsComponent} from './views/words/words.component';
import {OneLinerComponent} from './views/one-liner/one-liner.component';

const routes: Routes = [
  {path: 'logIn', component: LogInComponent},
  {path: 'words', component: WordsComponent},
  {path: 'oneLiner', component: OneLinerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
