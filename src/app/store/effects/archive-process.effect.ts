import { Injectable } from '@angular/core';
import { ProcessService } from '../../services/process.service';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';
import { ARCHIVE_PROCESS_ACTION, ErrorOccurredAction } from '../actions/store.actions';


@Injectable()
export class ArchiveProcessEffectService {

  constructor(private actions$: Actions, private processService: ProcessService) {

  }

  @Effect() newMessages$: Observable<any> = this.actions$
    .ofType(ARCHIVE_PROCESS_ACTION)
    .debug('archiving process')
    .switchMap(action => this.processService.start(action.payload))
    .catch(() => Observable.of(new ErrorOccurredAction('Error Ocurred while saving message')));
}
