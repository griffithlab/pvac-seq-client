import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule, ButtonModule } from 'primeng/primeng';

import { ManageComponent } from './manage.component';
import { ManageRoutingModule } from './manage-routing.module';

import { ProcessTableComponent } from './process-table/process-table.component';
import { ProcessDetailComponent } from './process-detail/process-detail.component';

@NgModule({
  imports: [
    ManageRoutingModule,
    CommonModule,
    DataTableModule,
    ButtonModule
  ],
  declarations: [
    ManageComponent,
    ProcessTableComponent,
    ProcessDetailComponent,
  ]
})
export class ManageModule { }
