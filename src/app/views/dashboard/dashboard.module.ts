import { NgModule } from '@angular/core';

import {
  InputTextModule,
  ButtonModule,
  ConfirmDialogModule
} from 'primeng/primeng';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ConfirmDialogModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
