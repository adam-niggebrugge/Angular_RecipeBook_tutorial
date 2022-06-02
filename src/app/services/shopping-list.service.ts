import { EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredients.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", "Suggestion is to use Granny Smith. Any tart apple", 5),
        new Ingredient("Carrots", "A sweet orange crunchy root", 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    } 

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // One method, viable, but a lot of emitting would occur with this as each ingredient is added
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient)
        // }
        this.ingredients.push(...ingredients); //ES6 spread operator converts the array into a list adding each individually
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}