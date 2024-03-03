import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-section',
  templateUrl: './panel-section.component.html',
  styleUrl: './panel-section.component.css'
})
export class PanelSectionComponent {

  Leftcontent = {
    leftText : "it's very important to make healthy kitchen for fresh food",
    title : "Book a Table",
    img : "../../assets/f.png"
  }

 Rightcontent = {
    RightText : "great food can mak your all party more enjoyable",
    title : "Book a Table",
    img : "../../assets/h.png"

  }

}
