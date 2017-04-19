import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { ProcessService } from '../../services/process.service';
import {
  LOAD_PROCESSES_ACTION,
  ProcessesLoadedAction,
  ErrorOccurredAction
} from '../actions/store.actions';

@Injectable()
export class LoadProcessesEffectService {
  constructor(private actions$: Actions,
    private processService: ProcessService) { }

  @Effect() proceses$: Observable<Action> = this.actions$
    .ofType(LOAD_PROCESSES_ACTION)
    .debug('loading processes')
    .switchMap(action => this.processService.query())
    .map(processes => new ProcessesLoadedAction(processes))
    .catch(() => Observable.of(new ErrorOccurredAction('Error Ocurred while saving message')));
}
