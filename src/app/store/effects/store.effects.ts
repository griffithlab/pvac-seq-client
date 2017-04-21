import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { ProcessService } from '../../services/process.service';
import {
    LOAD_PROCESSES_ACTION,
    LoadProcessesAction,
    ProcessesLoadedAction,

    LOAD_PROCESS_ACTION,
    ProcessLoadedAction,

    ARCHIVE_PROCESS_ACTION,
    ClearProcessDetailsAction,

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
        .catch(() => Observable.of(new ErrorOccurredAction('Error Ocurred while loading process.')));

    constructor(private actions$: Actions,
        private processService: ProcessService) { }

}

@Injectable()
export class ArchiveProcessEffectService {
    @Effect() status$: Observable<Action> = this.actions$
        .ofType(ARCHIVE_PROCESS_ACTION)
        .debug('archiving process')
        .switchMap((action) => {
            return this.processService.archive(action.payload)
                .map(() => action.payload);
        })
        .mergeMap((processId) => {
            return [
                new ClearProcessDetailsAction(processId),
                new LoadProcessesAction()
            ];
        })
        .catch(() => Observable.of(new ErrorOccurredAction('Error Ocurred while archiving process.')));

    constructor(private actions$: Actions,
        private processService: ProcessService) { }

}

// @Effect() authenticate$ = this.updates$
// .whenAction(AuthActions.AUTHENTICATE_REQUEST)
// .switchMap(update => this.api.post('/authenticate', update.action.payload)
//   .map((res:any) => {
//     return {
//       res: res,
//       update: update
//     };
//   })
//   .do((result:any) => {
//     if(result.update.action.payload.remember) {
//       this.authService.setAuth(result.res.json());
//     }
//   })
//   .map((result:any) => this.authActions.authenticateSuccess(result.res.json()))
//   .catch((err:any) => Observable.of(this.authActions.authenticateError(err)))
// );
