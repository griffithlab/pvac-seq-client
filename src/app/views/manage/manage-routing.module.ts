import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { ManageComponent, ProcessResolve } from './manage.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    resolve: {
      processes: ProcessResolve
    },
    data: {
      title: 'Manage'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [ProcessResolve],
  exports: [RouterModule]
})

export class ManageRoutingModule { }
