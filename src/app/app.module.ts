import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Components used throughout the App
import { HeaderComponent } from './component/header/header.component';

//For the Recipe specific components
import { RecipeListComponent } from './component/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './component/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './component/recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from "./component/recipes/recipes.component"

//List of the Shopping specific Components
import { ShopListEditComponent } from "./component/shopping/shopping-list/shop-list-edit/shop-list-edit.component";
import { ShoppingListComponent } from './component/shopping/shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShopListEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
