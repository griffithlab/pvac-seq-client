import { Injectable } from "@angular/core";
import { ProcessService } from "../../services/process.service";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { START_PROCESS_ACTION, ErrorOccurredAction } from "../actions/store.actions";


@Injectable()
export class WriteNewMessageEffectService {

  constructor(private actions$: Actions, private processService: ProcessService) {

  }

  @Effect() newMessages$: Observable<any> = this.actions$
    .ofType(START_PROCESS_ACTION)
    .debug("sending new message to the server")
    .switchMap(action => this.processService.start(action.payload))
    .catch(() => Observable.of(new ErrorOccurredAction("Error Ocurred while saving message")));
}
