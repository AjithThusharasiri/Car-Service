import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-job-status',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './job-status.component.html',
  styleUrl: './job-status.component.scss'
})
export class JobStatusComponent  implements OnInit {
  jobs: { car: string; ReNum: number; description: string; status: string }[] = [];
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  ngOnInit() {
    // Fetch or initialize jobs data
    this.jobs = [
      { car: 'Toyota Camry', ReNum: 1522, description: 'Oil Change', status: 'Pending' },
      { car: 'Honda Accord', ReNum: 1652, description: 'Tire Rotation', status: 'Pending' }
    ];
  }

  markAsInProgress(job: { car: string; ReNum: number; description: string; status: string }) {
    job.status = 'In Progress';
    console.log('Job status updated:', job);
    alert(`Job status updated:\nCar: ${job.car}\nRegistered Number: ${job.ReNum}\nStatus: ${job.status}`);
  }
}
