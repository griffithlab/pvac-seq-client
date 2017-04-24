import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { ResultsComponent } from './results.component';
import { ResultsListComponent } from './results-list/results-list.component';

const routes: Routes = [
  {
    path: '',
    component: ResultsComponent,
    data: {
      title: 'Results'
    },
    children: [
      {
        path: 'process/:processId',
        component: ResultsListComponent,
        data: {
          title: 'Process Result Files'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
