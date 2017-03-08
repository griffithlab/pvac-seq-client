import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule, ButtonModule } from 'primeng/primeng';

import { ManageComponent } from './manage.component';
import { ManageRoutingModule } from './manage-routing.module';

@NgModule({
  imports: [
    ManageRoutingModule,
    CommonModule,
    DataTableModule,
    ButtonModule
  ],
  declarations: [ManageComponent]
})
export class ManageModule { }
