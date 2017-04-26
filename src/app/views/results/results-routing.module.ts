import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { ResultsComponent } from './results.component';
import { ResultProcessesComponent } from './result-processes/result-processes.component';
import { ResultProcessComponent } from './result-process/result-process.component';
import { ResultFileComponent } from './result-file/result-file.component';
import { ResultVisualizeComponent } from './result-visualize/result-visualize.component';

const routes: Routes = [
  {
    path: '',
    component: ResultsComponent,
    data: {
      title: 'Results'
    },
    children: [
      {
        path: '',
        component: ResultProcessesComponent,
        data: {
          title: 'Completed Processes'
        }
      },
      {
        path: 'process/:processId',
        component: ResultProcessComponent,
        data: {
          title: 'Results Component'
        },
        children: [
          {
            path: 'file/:fileId',
            component: ResultFileComponent,
            data: {
              title: 'Result File'
            },
            children: [
              {
                path: 'visualize',
                component: ResultVisualizeComponent,
                data: {
                  title: 'Result Visualization'
                }
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
