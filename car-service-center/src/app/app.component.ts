import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { AddCarComponent } from "./add-car/add-car.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { JobFormComponent } from "./job-form/job-form.component";
import { JobStatusComponent } from "./job-status/job-status.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, AddCarComponent, DashboardComponent, JobFormComponent, JobStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'car-service-center';
}
