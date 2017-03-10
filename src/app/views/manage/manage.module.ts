import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule, ButtonModule } from 'primeng/primeng';

import { ManageComponent } from './manage.component';
import { ManageRoutingModule } from './manage-routing.module';

import { ProcessTableComponent } from './process-table.component';

@NgModule({
  imports: [
    ManageRoutingModule,
    CommonModule,
    DataTableModule,
    ButtonModule,
    ProcessTableComponent
  ],
  declarations: [
    ManageComponent,
    ProcessTableComponent,
  ]
})
export class ManageModule { }
