import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent implements OnInit {

  nameBrand =  'CASA RECIPE'

 social = {
  first : 'Facebook',
  last  : 'Instagram'

 }

constructor(){ }
ngOnInit(): void {
  
}

}
