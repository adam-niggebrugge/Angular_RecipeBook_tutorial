import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { RecipeService } from "src/app/services/recipe.service";
import { Recipe } from "../../../models/recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    console.log(this.recipes);
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(clickedRecipe: Recipe){
    this.recipeWasSelected.emit(clickedRecipe);
  }
}
