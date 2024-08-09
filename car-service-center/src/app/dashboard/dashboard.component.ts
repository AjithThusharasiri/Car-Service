import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  totalCars = 0;
  jobsInProgress = 0;
  completedJobs = 0;
  pendingJobs = 0;
  progressPercent = 0;

  ngOnInit(): void {
    // Simulate data fetching
    this.totalCars = 120;  // Example data
    this.jobsInProgress = 30; // Example data
    this.completedJobs = 70; // Example data
    this.pendingJobs = 20;  // Example data

    // Calculate progress percent
    this.progressPercent = (this.jobsInProgress / (this.jobsInProgress + this.pendingJobs)) * 100;
  }

  // pendingJobs: number = 5; // Example value

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  navigateToJobStatus(): void {
    this.router.navigate(['/job-status']);
    console.log("navigated");
  }
}
