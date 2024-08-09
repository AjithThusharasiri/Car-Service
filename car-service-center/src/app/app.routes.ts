import { Routes } from '@angular/router';
import { JobStatusComponent } from './job-status/job-status.component';
import { AddCarComponent } from './add-car/add-car.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobFormComponent } from './job-form/job-form.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'job-status', component: JobStatusComponent },
    { path: 'add-car', component: AddCarComponent },
    { path: 'add-job', component: JobFormComponent},
    { path: 'dashboard', component: DashboardComponent}
];
