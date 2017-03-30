import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartComponent } from './start.component';
import { StartRoutingModule } from './start-routing.module';

import {
  InputTextModule,
  DropdownModule
} from 'primeng/primeng';

import { ConfirmDialogModule } from "primeng/components/confirmdialog/confirmdialog";

@NgModule({
  imports: [
    StartRoutingModule,
    CommonModule,
  ],
  declarations: [StartComponent]
})
export class StartModule { }
