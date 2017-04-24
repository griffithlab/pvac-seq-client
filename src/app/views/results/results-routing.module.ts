import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { ResultsComponent } from './results.component';
import { ResultsTableComponent } from './results-table/results-table.component';

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
        component: ResultsTableComponent,
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
