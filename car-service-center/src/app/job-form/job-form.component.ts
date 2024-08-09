import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss'
})
export class JobFormComponent {
  job = {
    car: '',
    carNum: '',
    description: '',
    jobStatus: ''
  };

  carNumbers: string[] = [
    'ABC1233',
    'XYZ7893',
    'DEF4566',
    'GHI0128',
    'MAL1296',
    'AJI0620'
  ];

  cars: string[] = [
    'Toyota Camry',
    'Honda Accord',
    'Ford Focus',
    'Chevrolet Malibu',
    'Ford Focus',
    'BMW X5',
    'Audi Q7'
  ];

  jobStatus: string[] = [
    'Job in progress',
    'Job in Pending'
  ];

  uniqueCars: string[];
  constructor(private translate: TranslateService) {
    this.uniqueCars = Array.from(new Set(this.cars));
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }


  onSubmit() {
    if (this.job.car ==='' || this.job.description === '' || this.job.carNum === '' || this.job.jobStatus === '') {
      alert('Please enter valid details');
    }else{
      console.log('Job added:', this.job);
      alert('Job added: '+ this.job.car + " , " + this.job.carNum + " , " +this.job.description + " , " + this.job.jobStatus);
    }
  }

}
