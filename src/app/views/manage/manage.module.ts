import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DataTableModule,
  ButtonModule,
  PanelModule,
  TabViewModule,
} from 'primeng/primeng';

import { ManageComponent } from './manage.component';
import { ManageRoutingModule } from './manage-routing.module';

import { ProcessTableComponent } from './process-table/process-table.component';
import { ProcessDetailComponent } from './process-detail/process-detail.component';
import { StatusBadgeComponent } from './status-badge/status-badge.component';

@NgModule({
  imports: [
    CommonModule,
    ManageRoutingModule,
    DataTableModule,
    ButtonModule,
    PanelModule,
    TabViewModule,
  ],
  declarations: [
    ManageComponent,
    ProcessTableComponent,
    ProcessDetailComponent,
    StatusBadgeComponent,
  ]
})
export class ManageModule { }
