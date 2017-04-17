import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { Store } from '@ngrx/store';
import { ProcessService } from '../../../services/process.service';

import { AppState } from '../../../store/models/app.model';
import { Process } from '../../../store/models/process.model';
import { ProcessLoadedAction, ArchiveProcessAction, LoadProcessAction } from '../../../store/actions/store.actions';

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
      .select(state => state.store.processDetail[this.processId]);
  }

  // TODO: probably need to implement this w/ ngrx-effects to prompt update of process list
  archive() {
    // this.processService.archive(this.processId)
    //   .subscribe(response => this.store.dispatch(new ArchiveProcessAction(response)));
  }

  ngOnInit() {
    this.store.dispatch(new LoadProcessAction());
  }

}
