import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ConfirmDialogModule } from "primeng/components/confirmdialog/confirmdialog";

@NgModule({
    imports: [
        DashboardRoutingModule,
        ConfirmDialogModule,
        ChartsModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
