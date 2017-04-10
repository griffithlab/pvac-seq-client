import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StartComponent } from './start.component';
import { StartRoutingModule } from './start-routing.module';

import {
  InputTextModule,
  ButtonModule,
  TabViewModule,
  DropdownModule,
} from 'primeng/primeng';
import { StartFormComponent } from './start-form/start-form.component';

@NgModule({
  imports: [
    StartRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TabViewModule,
    InputTextModule,
    DropdownModule
  ],
  declarations: [StartComponent, StartFormComponent]
})
export class StartModule { }
