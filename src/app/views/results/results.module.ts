import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DataTableModule,
  ButtonModule,
  PanelModule,
  TabViewModule
} from 'primeng/primeng';

import { ResultsComponent } from './results.component';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsTableComponent } from './results-table/results-table.component';
import { FileTableComponent } from './file-table/file-table.component';

@NgModule({
  imports: [
    CommonModule,
    ResultsRoutingModule,
    DataTableModule,
    ButtonModule,
    PanelModule,
    TabViewModule,
  ],
  declarations: [ResultsComponent, ResultsTableComponent, FileTableComponent]
})
export class ResultsModule { }
