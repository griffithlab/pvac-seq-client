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
import { ResultFileComponent } from './result-file/result-file.component';
import { ResultProcessComponent } from './result-process/result-process.component';
import { ResultVisualizeComponent } from './result-visualize/result-visualize.component';

@NgModule({
  imports: [
    CommonModule,
    ResultsRoutingModule,
    DataTableModule,
    ButtonModule,
    PanelModule,
    TabViewModule,
  ],
  declarations: [
    ResultsComponent,
    ResultsTableComponent,
    FileTableComponent,
    ResultFileComponent,
    ResultProcessComponent,
    ResultVisualizeComponent,
  ]
})
export class ResultsModule { }
