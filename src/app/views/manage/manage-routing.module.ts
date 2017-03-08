import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { ManageComponent } from './manage.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    data: {
      title: 'Manage'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})

export class ManageRoutingModule { }
