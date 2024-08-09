import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [FormsModule, TranslateModule ],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.scss'
})
export class AddCarComponent {

  carModel = ''; 
  carBrand = ''; 
  carYear: number | null = null; 
  registeredNumber = ''; 

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  years = Array.from({ length: 2101 - 1900 }, (v, k) => 1900 + k);

  addCar() {
    if (this.carBrand === '' || this.carModel === '' || this.registeredNumber === '' || this.carYear === null) {
      alert("Enter valid details");
    } else {
      console.log('Car Added:', this.carModel, this.carBrand, this.carYear, this.registeredNumber);
      alert("success " + this.carModel + " " + this.carBrand + " " + this.carYear + " " + this.registeredNumber);
      this.carModel = '';
      this.carBrand = '';
      this.carYear = null;
      this.registeredNumber = '';
    }
  }
}
