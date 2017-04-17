import { Injectable } from '@angular/core';
import { ProcessService } from '../../services/process.service';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';
import {
  START_PROCESS_ACTION,
  ARCHIVE_PROCESS_ACTION,
  LOAD_PROCESS_ACTION,
  ProcessLoadedAction,
  ErrorOccurredAction
} from '../actions/store.actions';

@Injectable()
export class StartProcessEffectService {
  constructor(private actions$: Actions, private processService: ProcessService) { }

  @Effect() newMessages$: Observable<any> = this.actions$
    .ofType(START_PROCESS_ACTION)
    .debug('sending new message to the server')
    .switchMap(action => this.processService.start(action.payload))
    .catch(() => Observable.of(new ErrorOccurredAction('Error Ocurred while saving message')));
}

@Injectable()
export class ArchiveProcessEffectService {
  constructor(private actions$: Actions, private processService: ProcessService) { }

  @Effect() newMessages$: Observable<any> = this.actions$
    .ofType(ARCHIVE_PROCESS_ACTION)
    .debug('archiving process')
    .switchMap(action => this.processService.start(action.payload))
    .catch(() => Observable.of(new ErrorOccurredAction('Error Ocurred while archiving message')));
}

@Injectable()
export class LoadProcessEffectService {
  constructor(private processService: ProcessService,
    private processs$: Actions) {
  }

  @Effect() process$ = this.process$
    .ofType(LOAD_PROCESS_ACTION)
    .switchMap((payload) => { this.processService.get(payload.id); })
    .map(process => new ProcessLoadedAction(process));
}
