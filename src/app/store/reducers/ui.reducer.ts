import { Action } from '@ngrx/store';

import { UserInterfaceState, INITIAL_UI_STATE } from '../models/ui.model';
import {
    SelectProcessAction,
    SELECT_PROCESS_ACTION,

    ErrorOccurredAction,
    ERROR_OCCURRED_ACTION,

    SuccessOccurredAction,
    SUCCESS_OCCURRED_ACTION,

} from '../actions/ui.actions';

export function uiReducer(state: UserInterfaceState = INITIAL_UI_STATE, action: Action): UserInterfaceState {
    switch (action.type) {
        case SELECT_PROCESS_ACTION:
            return handleSelectProcessAction(state, action);

        default:
            return state;
    }
};

function handleSelectProcessAction(state: UserInterfaceState, action: SelectProcessAction): UserInterfaceState {
    const processId = action.payload;
    const newState = Object.assign({}, state);

    newState.selectedProcessId = processId;

    return newState;
}
