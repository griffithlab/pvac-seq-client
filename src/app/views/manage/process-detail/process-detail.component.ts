import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { Store } from '@ngrx/store';

import { AppState } from '../../../store/models/app.model';
import { Process } from '../../../store/models/process.model';
import { LoadProcessAction, ArchiveProcessAction } from '../../../store/actions/store.actions';

@Component({
  selector: 'pvs-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.scss']
})
export class ProcessDetailComponent implements OnInit {
  @Input() processId: number;

  process$: Observable<Process>;

  constructor(private store: Store<AppState>) {
    this.process$ = store
      .select((state) => {
        return state.store.processDetail[this.processId];
      });
  }

  loadProcess() {
    this.store.dispatch(new LoadProcessAction(this.processId));
  }

  archive() {
    this.store.dispatch(new ArchiveProcessAction(this.processId));
  }

  ngOnInit() {
    this.loadProcess();
  }

}
