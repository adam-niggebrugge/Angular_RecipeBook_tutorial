import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Recipe } from "../../../models/recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is simply a test", "https://publicdomainrecipes.org/recipes/stewed-carrots/Stewed%20Carrots_hud045b9506b44f73973a028a04f65a9ab_68762_350x350_fill_q75_box_smart1.jpg")
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipes)
  }

  onRecipeSelected(clickedRecipe: Recipe){
    this.recipeWasSelected.emit(clickedRecipe);
  }
}
