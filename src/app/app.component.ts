import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe_book_app';
  private recipesShown: boolean;

  constructor(){
    this.recipesShown = true;
  }

  onPageToggle(e: boolean){
    this.recipesShown = e;
  }

  show(){
    return this.recipesShown;
  }
}
