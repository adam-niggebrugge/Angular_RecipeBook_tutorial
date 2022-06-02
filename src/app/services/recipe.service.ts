import { EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredients.model";

import { Recipe } from "../models/recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Test Recipe", "This is simply a test", "https://publicdomainrecipes.org/recipes/stewed-carrots/Stewed%20Carrots_hud045b9506b44f73973a028a04f65a9ab_68762_350x350_fill_q75_box_smart1.jpg",
        [
            new Ingredient('Carrot', 'Sweet root vegetable', 12),
            new Ingredient('Sugar', 'Raw granular sweetner', 2),
            new Ingredient('Parsley', 'Leafy herb that adds bitters', 5)
        ]),
        new Recipe("Test Recipe Deux", "This is simply a test with a different name and value. Picture stays the same", "https://publicdomainrecipes.org/recipes/stewed-carrots/Stewed%20Carrots_hud045b9506b44f73973a028a04f65a9ab_68762_350x350_fill_q75_box_smart1.jpg",
        [
            new Ingredient('Parsnips', 'Sweet root vegetable', 12),
            new Ingredient('Salt', 'A preservative', 2),
            new Ingredient('Cilantro', 'Leafy herb that has a citrus like taste', 5)
        ])
      ];
    
    getRecipes() {
        return this.recipes.slice(); //this will send only a copy to any component using the service
    }


}