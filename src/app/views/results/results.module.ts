import { NgModule } from '@angular/core';

import { ResultsComponent } from './results.component';
import { ResultsRoutingModule } from './results-routing.module';
import { ConfirmDialogModule } from "primeng/components/confirmdialog/confirmdialog";
import { ResultsListComponent } from './results-list/results-list.component';

@NgModule({
    imports: [
        ResultsRoutingModule
    ],
    declarations: [ResultsComponent, ResultsListComponent]
})
export class ResultsModule { }
