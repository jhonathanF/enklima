import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }
];


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
  ],
  declarations: [DashboardComponent],
  exports: [RouterModule]
})
export class DashboardModule { }
