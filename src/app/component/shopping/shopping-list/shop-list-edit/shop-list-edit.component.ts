import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredients.model';

@Component({
  selector: 'app-shop-list-edit',
  templateUrl: './shop-list-edit.component.html',
  styleUrls: ['./shop-list-edit.component.css']
})
export class ShopListEditComponent implements OnInit {
  @ViewChild("nameInput", {static: true}) nameInputRef: ElementRef;
  @ViewChild("amountInput", {static: true}) amountInputRef: ElementRef;
  @ViewChild("detailInput", {static: true}) detailInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingDetail = this.detailInputRef.nativeElement.value;

    const newIngredient = new Ingredient(ingName, ingDetail, ingAmount);

    this.ingredientAdded.emit(newIngredient);
    
  }
}
