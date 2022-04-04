import { Component, OnInit } from '@angular/core';

import { Ingredient } from 'src/app/models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", "Suggestion is to use Granny Smith. Any tart apple", 5),
    new Ingredient("Carrots", "A sweet orange crunchy root", 10),

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
