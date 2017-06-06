import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { ProcessService } from '../../services/process.service';
import { InputService } from '../../services/input.service';
import { FileService } from '../../services/file.service';

import * as _ from 'lodash';

import {
  LOAD_PROCESSES_ACTION,
  LoadProcessesAction,
  ProcessesLoadedAction,

  LOAD_PROCESS_ACTION,
  ProcessLoadedAction,

  ARCHIVE_PROCESS_ACTION,
  ClearProcessDetailsAction,

  START_PROCESS_ACTION,
  ProcessStartedAction,

  LOAD_INPUTS_ACTION,
  InputsLoadedAction,

  LOAD_FILES_ACTION,
  FilesLoadedAction,

  ErrorOccurredAction,
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
    .catch(() => Observable.of(new ErrorOccurredAction({
      id: _.uniqueId('error_'),
      action: LOAD_PROCESSES_ACTION,
      summary: 'Load Processes Error'
    })));
}

@Injectable()
export class LoadProcessEffectService {
  @Effect() proces$: Observable<Action> = this.actions$
    .ofType(LOAD_PROCESS_ACTION)
    .debug('loading process')
    .switchMap(action => this.processService.get(action.payload))
    .map(process => new ProcessLoadedAction(process))
    .catch(() => Observable.of(new ErrorOccurredAction({
      id: _.uniqueId('error_'),
      action: LOAD_PROCESS_ACTION,
      summary: 'Load Process Error'
    })));

  constructor(private actions$: Actions,
    private processService: ProcessService) { }
}

@Injectable()
export class LoadFilesEffectService {
  constructor(private actions$: Actions,
    private fileService: FileService) { }

  @Effect() files$: Observable<Action> = this.actions$
    .ofType(LOAD_FILES_ACTION)
    .debug('loading files')
    .switchMap((action) => {
      return this.fileService.query(action.payload)
        .map((files) => {
          return new FilesLoadedAction({ processId: action.payload, files: files });
        });
    })
    .catch(() => Observable.of(new ErrorOccurredAction({
      id: _.uniqueId('error_'),
      action: LOAD_FILES_ACTION,
      summary: 'Load Files Error'
    })));
}

@Injectable()
export class ArchiveProcessEffectService {
  constructor(private actions$: Actions,
    private processService: ProcessService) { }

  @Effect() status$: Observable<Action> = this.actions$
    .ofType(ARCHIVE_PROCESS_ACTION)
    .debug('archiving process')
    .switchMap((action) => {
      return this.processService.archive(action.payload)
        .flatMap((response) => {
          const processId = action.payload;
          return [
            new LoadProcessesAction(),
            new ClearProcessDetailsAction(processId),
          ];
        });
    })
    .catch(() => Observable.from([
      new ErrorOccurredAction({
        id: _.uniqueId('error_'),
        action: ARCHIVE_PROCESS_ACTION,
        summary: 'Archive Process Error'
      }),
    ]));
}

@Injectable()
export class StartProcessEffectService {
  constructor(private actions$: Actions,
    private processService: ProcessService) { }

  @Effect() status$: Observable<Action> = this.actions$
    .ofType(START_PROCESS_ACTION)
    .switchMap((action) => {
      return this.processService.start(action.payload)
        .flatMap(response => [
          new ProcessStartedAction(response),
        ]);
    })
    .catch(() => Observable.from([
      new ErrorOccurredAction({
        id: _.uniqueId('error_'),
        action: START_PROCESS_ACTION,
        summary: 'Load Processes Error'
      }),
    ]));
}

@Injectable()
export class LoadInputsEffectService {
  constructor(private actions$: Actions,
    private inputService: InputService) { }

  @Effect() inputs$: Observable<Action> = this.actions$
    .ofType(LOAD_INPUTS_ACTION)
    .debug('loading inputs')
    .switchMap(action => this.inputService.query())
    .map(inputs => new InputsLoadedAction(inputs))
    .catch(() => Observable.of(new ErrorOccurredAction({
      id: _.uniqueId('error_'),
      action: LOAD_INPUTS_ACTION,
      summary: 'Load Inputs Error'
    })));

}
