import { Component } from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.css'
})
export class FirstSectionComponent {
  
  sectionContenu = {
    introduction : 'Flavors that dance on your tongue and ignite your senses.',
    button : ' Book a Table',
    Image : '../../assets/one.png'
  }

}
