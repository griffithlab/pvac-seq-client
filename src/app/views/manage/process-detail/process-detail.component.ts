import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { Store } from '@ngrx/store';
import { ProcessService } from '../../../services/process.service';

import { AppState } from '../../../store/models/app.model';
import { Process } from '../../../store/models/process.model';
import { LoadProcessAction } from '../../../store/actions/store.actions';

// import { mapStateToProcess } from './../mapStateToProcess';

@Component({
  selector: 'pvs-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.scss']
})
export class ProcessDetailComponent implements OnInit {
  @Input() processId: number;

  process$: Observable<Process>;

  constructor(private store: Store<AppState>, private processService: ProcessService) {
    this.process$ = store
      .select(state => state.store.processDetail[this.processId]);
  }

  loadProcess(processId: number) {
    this.processService.get(processId)
      .subscribe(process => this.store.dispatch(new LoadProcessAction(process)));
  }

  ngOnInit() {
    this.loadProcess(this.processId);
  }

}
