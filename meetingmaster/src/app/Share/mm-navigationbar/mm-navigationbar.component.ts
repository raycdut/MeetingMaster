import { Component, Directive, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mm-navigationbar',
  templateUrl: './mm-navigationbar.component.html',
  styleUrls: ['./mm-navigationbar.component.css']
})
export class MmNavigationbarComponent implements OnInit {

  @Input() pageName:string // current page name

  constructor() {

   }

  ngOnInit() {
  }

 isActive(menuName:string ):boolean{
   return this.pageName === menuName;
 }

}
