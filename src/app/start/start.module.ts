import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { StartComponent } from './start.component';
import { StartRoutingModule } from './start-routing.module';
import { ConfirmDialogModule } from "primeng/components/confirmdialog/confirmdialog";

@NgModule({
    imports: [
        StartRoutingModule
    ],
    declarations: [StartComponent]
})
export class StartModule { }
