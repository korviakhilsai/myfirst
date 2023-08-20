import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  color='red';
  address:number=5;
  imgPath:string='assets/images/Akhil_Photo.jpg';
  btnStatus:boolean=false;
  emailValue='';
  bindingClick(){
    this.address=6;
  }


}
