import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StartComponent } from './start.component';
import { StartRoutingModule } from './start-routing.module';

import {
  InputTextModule,
  DropdownModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    StartRoutingModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    DropdownModule
  ],
  declarations: [StartComponent]
})
export class StartModule { }
