import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientClear = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    const iName = this.nameInputRef.nativeElement.value;
    const iAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(iName, iAmount);

    this.ingredientAdded.emit(newIngredient);
  }

  onClear() {
    this.ingredientClear.emit();
  }

}
