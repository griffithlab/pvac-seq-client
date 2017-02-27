import { NgModule } from '@angular/core';

import { ResultsComponent } from './results.component';
import { ResultsRoutingModule } from './results-routing.module';
import { ConfirmDialogModule } from "primeng/components/confirmdialog/confirmdialog";

@NgModule({
    imports: [
        ResultsRoutingModule
    ],
    declarations: [ResultsComponent]
})
export class ResultsModule { }
