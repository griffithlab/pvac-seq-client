import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { ProcessService } from '../../services/process.service';
import { InputService } from '../../services/input.service';
import { FileService } from '../../services/file.service';

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
export class LoadFilesEffectService {
  @Effect() files$: Observable<Action> = this.actions$
    .ofType(LOAD_FILES_ACTION)
    .debug('loading files')
    .switchMap((action) => {
      return this.fileService.query(action.payload)
        .map((files) => {
          return new FilesLoadedAction({ processId: action.payload, files: files });
        })
    })
    .catch(() => Observable.of(new ErrorOccurredAction('Error occurred while loading process files.')));

  constructor(private actions$: Actions,
    private fileService: FileService) { }

}

@Injectable()
export class ArchiveProcessEffectService {
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
    .catch(() => Observable.of(new ErrorOccurredAction('Error Ocurred while archiving process.')));

  constructor(private actions$: Actions,
    private processService: ProcessService) { }

}

@Injectable()
export class StartProcessEffectService {
  @Effect() status$: Observable<Action> = this.actions$
    .ofType(START_PROCESS_ACTION)
    .debug('starting process')
    .switchMap((action) => {
      return this.processService.start(action.payload);
    })
    .map(response => new ProcessStartedAction(response))
    .catch(() => Observable.of(new ErrorOccurredAction('Error Ocurred while archiving process.')));

  constructor(private actions$: Actions,
    private processService: ProcessService) { }

}

@Injectable()
export class LoadInputsEffectService {
  @Effect() inputs$: Observable<Action> = this.actions$
    .ofType(LOAD_INPUTS_ACTION)
    .debug('loading inputs')
    .switchMap(action => this.inputService.query())
    .map(inputs => new InputsLoadedAction(inputs))
    .catch(() => Observable.of(new ErrorOccurredAction('Error Ocurred while loading inputs.')));

  constructor(private actions$: Actions,
    private inputService: InputService) { }

}
