import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ManageComponent } from './manage.component';
import { ManageRoutingModule } from './manage-routing.module';

@NgModule({
  imports: [
    ManageRoutingModule,
    CommonModule
  ],
  declarations: [ManageComponent]
})
export class ManageModule { }
