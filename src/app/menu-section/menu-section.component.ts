import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.css'
})
export class MenuSectionComponent  {

  name1 = "Salade ";
  name2 = " Classic Burgers";
  name3 = "Classic pizzas ";
  name4 = "Appetizers "



  Salade = [ 
  
  'Salade César poulet' ,
  'Assiette de saumon fumé' ,
  'Salade niçoise revisitée' ,
  'Planche de fromage'

   ]

  Burgers = [

  "Cheeseburger",
  "Bacon Cheeseburger",
  "Double Cheeseburger",
  "Mushroom & Swiss Burger"
    ]

  pizzas = [

      "Margherita",
      "Hawaiian",
      "Mushroom",
      "Truffle pizza"
  ]

  Appetizers = [

      "Oysters on the half shell",
      "Shrimp cocktail",
      "Mussels",
      "Calamari fritti"
   ]

  images = {
    leftImg : "../../assets/1.png",
    rightImg : "../../assets/2.png"
  }

}
