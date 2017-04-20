import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { ProcessService } from '../../services/process.service';
import {
  LOAD_PROCESSES_ACTION,
  ProcessesLoadedAction,
  LOAD_PROCESS_ACTION,
  ProcessLoadedAction,
  ErrorOccurredAction
} from '../actions/store.actions';

@Injectable()
export class LoadProcessesEffectService {
  @Effect() proceses$: Observable<Action> = this.actions$
    .ofType(LOAD_PROCESSES_ACTION)
    .debug('loading processes')
    .switchMap(action => this.processService.query())
    .map(processes => new ProcessesLoadedAction(processes))
    .catch(() => Observable.of(new ErrorOccurredAction('Error Ocurred while loading processes.')));

  constructor(private actions$: Actions,
    private processService: ProcessService) { }

}

@Injectable()
export class LoadProcessEffectService {
  @Effect() proces$: Observable<Action> = this.actions$
    .ofType(LOAD_PROCESS_ACTION)
    .debug('loading process')
    .switchMap(action => this.processService.get(action.payload))
    .map(process => new ProcessLoadedAction(process))
    .catch(() => Observable.of(new ErrorOccurredAction('Error Ocurred while loading process')));

  constructor(private actions$: Actions,
    private processService: ProcessService) { }

}
