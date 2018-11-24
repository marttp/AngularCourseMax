import { Component, OnInit } from '@angular/core';
import Recipe from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2xRpcEu5BqObDL3tWA8C0bYcoq7u9Z_LgNUEPTjT5NBX51V-'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2xRpcEu5BqObDL3tWA8C0bYcoq7u9Z_LgNUEPTjT5NBX51V-'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
